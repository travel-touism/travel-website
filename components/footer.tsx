'use client'

import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AT</span>
              </div>
              <span className="font-bold text-xl">Ajanta Travel</span>
            </div>
            <p className="text-white/80">
              Your trusted partner for unforgettable travel experiences across the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link href="#destinations" className="hover:text-white transition-colors">Destinations</Link></li>
              <li><Link href="#packages" className="hover:text-white transition-colors">Packages</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                <span>123 Travel Street, New Delhi, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>+91 9876 543 210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>info@ajantatravel.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/70 text-sm">
            <p>&copy; 2024 Ajanta Travel. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Facebook</Link>
              <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
              <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
              <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
