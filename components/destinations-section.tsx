'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'

const destinations = [
  {
    id: 1,
    name: 'Taj Mahal, Agra',
    rating: 4.9,
    reviews: 324,
    description: 'Experience the eternal monument to love',
    price: '$899',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 2,
    name: 'Goa Beaches',
    rating: 4.8,
    reviews: 456,
    description: 'Relax on golden sands and azure waters',
    price: '$599',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    id: 3,
    name: 'Kerala Backwaters',
    rating: 4.9,
    reviews: 512,
    description: 'Discover the tropical paradise of India',
    price: '$749',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    id: 4,
    name: 'Rajasthan Forts',
    rating: 4.7,
    reviews: 289,
    description: 'Walk through centuries of history',
    price: '$799',
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
]

export function DestinationsSection() {
  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Popular Destinations</h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Handpicked locations for the ultimate travel experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest) => (
          <Card key={dest.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Image */}
            <div
              className="h-48 bg-cover bg-center relative"
              style={{ background: dest.image }}
            >
              <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors"></div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-primary mb-2">{dest.name}</h3>
              <p className="text-sm text-foreground/70 mb-4">{dest.description}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < 5 ? 'fill-accent text-accent' : 'text-border'}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-primary">{dest.rating}</span>
                <span className="text-xs text-foreground/60">({dest.reviews})</span>
              </div>

              {/* Price and Button */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-secondary">{dest.price}</span>
                <Button variant="outline" className="text-sm">Explore</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
