import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ClerkProvider } from "@clerk/nextjs"
import { DynamicTitle } from "@/components/dynamic-title"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ajanta Travel",
  description: "Ajanta Travel",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet, noimageindex",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="bg-background">
        <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
          <DynamicTitle />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
