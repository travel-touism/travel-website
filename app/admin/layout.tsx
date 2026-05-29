import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'

export const dynamic = 'force-dynamic'

function validateClerkEnvironment() {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  const secretKey = process.env.CLERK_SECRET_KEY

  if (!publishableKey) {
    console.error("Missing NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY environment variable")
  }

  if (!secretKey) {
    console.error("Missing CLERK_SECRET_KEY environment variable")
  }
}

// Validate environment variables in development
if (process.env.NODE_ENV === "development") {
  validateClerkEnvironment()
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  return <>{children}</>
}
