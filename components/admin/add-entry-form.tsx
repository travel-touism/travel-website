"use client"

import type React from "react"
import { useState } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type AddEntryFormProps = { onSuccess: () => void }

const initialFormData = {
  applicationReferenceNo: "",
  dateOfIssue: "",
  name: "",
  validUpto: "",
  passportNumber: "",
  dateOfBirth: "",
  issuedBy: "",
  nationality: "",
  certificateNumber: "",
  purpose: "",
  submittedOn: "",
  applicationStatus: "",
  remarks: "",
  email: "",
  password: "",
}

export function AddEntryForm({ onSuccess }: AddEntryFormProps) {
  const [formData, setFormData] = useState(initialFormData)
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const updateField = (field: keyof typeof initialFormData, value: string) =>
    setFormData((current) => ({ ...current, [field]: value }))

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!file) return setError("Please select a PDF file")
    setLoading(true)
    setError("")
    try {
      const body = new FormData()
      body.append("file", file)
      Object.entries(formData).forEach(([key, value]) => body.append(key, value))
      const response = await fetch("/api/admin/upload", { method: "POST", body })
      const data = await response.json()
      if (!response.ok) return setError(data.error || "Upload failed")
      onSuccess()
      setFormData(initialFormData)
      setFile(null)
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
    <form onSubmit={handleSubmit} className="flex max-h-[70vh] flex-col gap-4 overflow-y-auto pr-1">
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map(([id, label, type = "text"]) => (
          <div key={id} className="flex flex-col gap-2">
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} type={type} value={formData[id]} onChange={(event) => updateField(id, event.target.value)} required={!['remarks', 'issuedBy', 'certificateNumber'].includes(id)} />
          </div>
        ))}
        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="file">PDF File</Label>
          <Input id="file" type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={(event) => setFile(event.target.files?.[0] || null)} required />
        </div>
      </div>
      {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
      <Button type="submit" className="w-full" disabled={loading}>{loading ? "Uploading..." : "Create Entry"}</Button>
    </form>
  )
}

export default AddEntryForm
