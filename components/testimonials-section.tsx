'use client'

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Adventure Enthusiast',
    rating: 5,
    text: 'Ajanta Travel made our dream vacation come true. Every detail was perfectly planned and executed!',
    initials: 'SJ',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Business Traveler',
    rating: 5,
    text: 'Efficient, professional, and personalized service. They exceeded all my travel expectations.',
    initials: 'RK',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Family Travel',
    rating: 5,
    text: 'The guides were knowledgeable and the itinerary was perfect for our family. Highly recommended!',
    initials: 'EC',
  },
  {
    id: 4,
    name: 'Michael Brown',
    role: 'Solo Traveler',
    rating: 5,
    text: 'Best travel experience ever! Safe, affordable, and unforgettable memories. Will book again!',
    initials: 'MB',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">What Our Travelers Say</h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Real experiences from thousands of happy customers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow">
            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-accent text-accent" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-foreground/80 mb-6 italic">"{testimonial.text}"</p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                {testimonial.initials}
              </div>
              <div>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
