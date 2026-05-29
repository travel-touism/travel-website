'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">AT</span>
          </div>
          <span className="font-bold text-primary text-xl hidden sm:inline">Ajanta Travel</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#destinations" className="text-foreground hover:text-primary transition-colors">
            Destinations
          </Link>
          <Link href="#packages" className="text-foreground hover:text-primary transition-colors">
            Packages
          </Link>
          <Link href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
          <Button className="bg-secondary hover:bg-secondary/90">Book Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-border md:hidden">
            <div className="flex flex-col p-4 gap-4">
              <Link href="#destinations" className="text-foreground hover:text-primary">
                Destinations
              </Link>
              <Link href="#packages" className="text-foreground hover:text-primary">
                Packages
              </Link>
              <Link href="#about" className="text-foreground hover:text-primary">
                About
              </Link>
              <Link href="#contact" className="text-foreground hover:text-primary">
                Contact
              </Link>
              <Button className="w-full bg-secondary hover:bg-secondary/90">Book Now</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
