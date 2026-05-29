'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'

export function NewsletterSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Ready for Your Next Adventure?</h2>
        <p className="text-lg text-white/90 mb-8">
          Subscribe to get exclusive deals and travel inspiration delivered to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
          <div className="flex-1 relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary" size={20} />
            <Input
              type="email"
              placeholder="Enter your email"
              className="pl-12 h-12 text-primary bg-white border-0"
            />
          </div>
          <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold h-12 px-8">
            Subscribe Now
          </Button>
        </form>

        <p className="text-sm text-white/80 mt-4">
          We&apos;d love to hear from you. No spam, just travel inspiration.
        </p>
      </div>
    </section>
  )
}
