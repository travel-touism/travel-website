import { auth } from '@clerk/nextjs/server'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const { user } = await auth()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AT</span>
            </div>
            <span className="font-bold text-primary text-xl hidden sm:inline">Ajanta Admin</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-foreground/70">Welcome, {user?.firstName || user?.emailAddresses[0]?.emailAddress}</span>
            <UserButton afterSignOutUrl="/" />
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-primary mb-2">Admin Dashboard</h1>
        <p className="text-foreground/70 mb-8">Manage Ajanta Travel operations and content</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold text-primary mb-4">Bookings</h2>
            <p className="text-foreground/70 mb-4">View and manage customer bookings</p>
            <Button variant="outline" disabled>Coming Soon</Button>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold text-primary mb-4">Destinations</h2>
            <p className="text-foreground/70 mb-4">Add and manage travel destinations</p>
            <Button variant="outline" disabled>Coming Soon</Button>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold text-primary mb-4">Packages</h2>
            <p className="text-foreground/70 mb-4">Create and manage tour packages</p>
            <Button variant="outline" disabled>Coming Soon</Button>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold text-primary mb-4">Inquiries</h2>
            <p className="text-foreground/70 mb-4">Handle customer inquiries and leads</p>
            <Button variant="outline" disabled>Coming Soon</Button>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold text-primary mb-4">Reports</h2>
            <p className="text-foreground/70 mb-4">View analytics and business reports</p>
            <Button variant="outline" disabled>Coming Soon</Button>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold text-primary mb-4">Settings</h2>
            <p className="text-foreground/70 mb-4">Manage admin and system settings</p>
            <Button variant="outline" disabled>Coming Soon</Button>
          </div>
        </div>

        <div className="mt-12">
          <Link href="/">
            <Button variant="outline">Back to Homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
