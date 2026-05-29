'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MapPin } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6 text-balance leading-tight">
          Explore the World with Ajanta Travel
        </h1>

        <p className="text-lg sm:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto text-balance">
          Discover unforgettable journeys across breathtaking destinations. Your adventure starts here.
        </p>

        {/* Search Box */}
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center gap-3 border border-border rounded-lg px-4">
              <MapPin className="text-secondary" size={20} />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full py-3 outline-none text-foreground bg-transparent"
              />
            </div>
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8">
              Search Deals
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/70">
          <span className="flex items-center gap-2">✓ 500+ Destinations</span>
          <span className="flex items-center gap-2">✓ Expert Guides</span>
          <span className="flex items-center gap-2">✓ Best Prices</span>
        </div>
      </div>
    </section>
  )
}
