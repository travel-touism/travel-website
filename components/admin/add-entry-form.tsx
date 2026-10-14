"use client"

import type React from "react"
import { useState } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type AddEntryFormProps = { onSuccess: () => void }

const PURPOSE = "Travelling to / Applying for documentation for the Russian Federation"
const ISSUED_BY = "Embassy of Nepal, New Delhi, India"
const APPLICATION_STATUS = "ISSUED"

function formatInputDate(date: Date) {
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-")
}

function getNepaliFiscalYear(date: Date) {
  const fiscalYearStart = new Date(date.getFullYear(), 6, 16)
  const startYear = date >= fiscalYearStart ? date.getFullYear() + 57 : date.getFullYear() + 56
  return `${String(startYear).slice(-2)}/${String(startYear + 1).slice(-2)}`
}

function createInitialFormData() {
  const today = new Date()
  const submittedOn = new Date(today)
  submittedOn.setDate(today.getDate() - 2)
  const validUpto = new Date(today)
  validUpto.setDate(today.getDate() + 7)
  const fiscalYear = getNepaliFiscalYear(today)
  const weekday = today.toLocaleString("en-US", { weekday: "short" }).toUpperCase()
  const year = today.getFullYear()
  const randomDigits = (length: number) => String(Math.floor(Math.random() * 10 ** length)).padStart(length, "0")

  return {
    applicationReferenceNo: `${fiscalYear}/GR-${weekday}/${randomDigits(6)}`,
    dateOfIssue: formatInputDate(today),
    name: "",
    validUpto: formatInputDate(validUpto),
    passportNumber: "",
    dateOfBirth: "",
    issuedBy: ISSUED_BY,
    nationality: "Nepali",
    certificateNumber: `NOC/${year}/${randomDigits(6)}`,
    purpose: PURPOSE,
    submittedOn: formatInputDate(submittedOn),
    applicationStatus: APPLICATION_STATUS,
    remarks: "",
    email: "",
    password: "",
  }
}

export function AddEntryForm({ onSuccess }: AddEntryFormProps) {
  const [formData, setFormData] = useState(createInitialFormData)
  const [file, setFile] = useState<File | null>(null)
  const [photo, setPhoto] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const updateField = (field: keyof ReturnType<typeof createInitialFormData>, value: string) =>
    setFormData((current) => ({ ...current, [field]: value }))

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!file) return setError("Please select a PDF file")
    if (!photo) return setError("Please select a photo")
    setLoading(true)
    setError("")
    try {
      const body = new FormData()
      body.append("file", file)
      body.append("photo", photo)
      Object.entries(formData).forEach(([key, value]) => body.append(key, value))
      const response = await fetch("/api/admin/upload", { method: "POST", body })
      const data = await response.json()
      if (!response.ok) return setError(data.error || "Upload failed")
      onSuccess()
      setFormData(createInitialFormData())
      setFile(null)
      setPhoto(null)
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const fields = [
    ["applicationReferenceNo", "Application Reference No."], ["dateOfIssue", "Date of Issue", "date"],
    ["name", "Full Name"], ["validUpto", "Valid Upto", "date"], ["passportNumber", "Passport Number"],
    ["dateOfBirth", "Date of Birth", "date"], ["issuedBy", "Issued By"], ["nationality", "Nationality"],
    ["certificateNumber", "Certificate Number"], ["purpose", "Purpose"], ["submittedOn", "Submitted On", "date"],
    ["applicationStatus", "Application Status"], ["remarks", "Remarks"], ["email", "Email", "email"],
    ["password", "Access Password", "password"],
  ] as const

  return (
    <form onSubmit={handleSubmit} className="flex max-h-[70vh] flex-col gap-5 overflow-y-auto px-1 py-2 sm:px-2">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map(([id, label, type = "text"]) => (
          <div key={id} className="flex flex-col gap-2">
            <Label htmlFor={id}>{label}</Label>
            <Input className="flex items-center" id={id} type={type} lang={type === "date" ? "en-GB" : undefined} value={formData[id]} onChange={(event) => updateField(id, event.target.value)} required={!['remarks', 'issuedBy', 'certificateNumber'].includes(id)} />
          </div>
        ))}
        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="photo">Photo</Label>
          <Input id="photo" type="file" accept=".jpg,.jpeg,.png,.webp" className="h-12 py-2" onChange={(event) => setPhoto(event.target.files?.[0] || null)} required />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="file">PDF File</Label>
          <Input id="file" type="file" accept=".pdf" className="h-14 py-3" onChange={(event) => setFile(event.target.files?.[0] || null)} required />
        </div>
      </div>
      {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
      <Button type="submit" className="w-full" disabled={loading}>{loading ? "Uploading..." : "Create Entry"}</Button>
    </form>
  )
}

export default AddEntryForm
