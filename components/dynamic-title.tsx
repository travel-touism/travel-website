"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function DynamicTitle() {
  const pathname = usePathname()

  useEffect(() => {
    let title = "Ajanta Travel"

    document.title = title
  }, [pathname])

  return null
}
