import { type NextRequest, NextResponse } from "next/server"
import { put } from "@vercel/blob"
import { savePDFEntry } from "@/lib/redis"
import { generateUniqueId, isValidFileType } from "@/lib/utils"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const photo = formData.get("photo") as File
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const applicationFields = {
      applicationReferenceNo: String(formData.get("applicationReferenceNo") || ""),
      dateOfIssue: String(formData.get("dateOfIssue") || ""),
      validUpto: String(formData.get("validUpto") || ""),
      passportNumber: String(formData.get("passportNumber") || ""),
      dateOfBirth: String(formData.get("dateOfBirth") || ""),
      issuedBy: String(formData.get("issuedBy") || ""),
      nationality: String(formData.get("nationality") || ""),
      certificateNumber: String(formData.get("certificateNumber") || ""),
      purpose: String(formData.get("purpose") || ""),
      submittedOn: String(formData.get("submittedOn") || ""),
      applicationStatus: String(formData.get("applicationStatus") || ""),
      remarks: String(formData.get("remarks") || ""),
    }

    // Validate required fields
    if (!file || !photo || !name || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (!isValidFileType(file.name) || !isValidFileType(photo.name)) {
      return NextResponse.json({ error: "Only Image/PDF files are allowed" }, { status: 400 })
    }

    const maxSize = 20 * 1024 * 1024
    if (file.size > maxSize || photo.size > maxSize) {
      return NextResponse.json({ error: "Each file must be less than 20MB" }, { status: 400 })
    }

    // Generate unique ID for the entry
    const uniqueId = generateUniqueId()

    // Upload to Vercel Blob with organized path
    const filename = `pdfs/${uniqueId}/${file.name}`
    const blob = await put(filename, file, {
      access: "public",
    })
    const photoFilename = `photos/${uniqueId}/${photo.name}`
    const photoBlob = await put(photoFilename, photo, {
      access: "public",
    })

    // Save entry to Redis
    const pdfEntry = {
      id: uniqueId,
      name,
      email,
      password,
      ...applicationFields,
      filename: file.name,
      blobUrl: blob.url,
      photoFilename: photo.name,
      photoBlobUrl: photoBlob.url,
      createdAt: new Date().toISOString(),
    }

    await savePDFEntry(pdfEntry)

    return NextResponse.json({
      success: true,
      id: uniqueId,
      shareUrl: `/s/${uniqueId}`,
      message: "PDF uploaded successfully",
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}
