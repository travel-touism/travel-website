'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'

const destinations = [
  {
    id: 1,
    name: 'Dubai, UAE',
    rating: 4.9,
    reviews: 324,
    description: 'Experience luxury, innovation and desert adventures',
    image: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
  },
  {
    id: 2,
    name: 'Paris, France',
    rating: 4.8,
    reviews: 456,
    description: 'The City of Light and timeless romantic elegance',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 3,
    name: 'New Delhi, India',
    rating: 4.9,
    reviews: 512,
    description: 'Ancient heritage meets vibrant modern culture',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    id: 4,
    name: 'Barcelona, Spain',
    rating: 4.7,
    reviews: 289,
    description: 'Explore architectural wonders and Mediterranean charm',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
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

              {/* Button */}
              <div>
                <Button variant="outline" className="text-sm w-full">Explore</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
