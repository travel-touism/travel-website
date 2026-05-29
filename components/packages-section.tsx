'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const packages = [
  {
    id: 1,
    name: 'Explorer',
    duration: '5 Days',
    description: 'Perfect for quick getaways',
    features: [
      'Accommodation',
      'Daily breakfast',
      'Local guide',
      'Transportation'
    ],
    highlighted: false,
  },
  {
    id: 2,
    name: 'Adventurer',
    duration: '10 Days',
    description: 'Experience it all',
    features: [
      'Accommodation',
      'All meals included',
      'Expert guide',
      'Activities & tours',
      'Travel insurance',
      'Photography sessions'
    ],
    highlighted: true,
  },
  {
    id: 3,
    name: 'Wanderer',
    duration: '15 Days',
    description: 'Ultimate immersion',
    features: [
      'Luxury accommodation',
      'All meals & drinks',
      'Dedicated guide',
      'Premium activities',
      'Travel insurance',
      'Spa & wellness',
      'Shopping assistance'
    ],
    highlighted: false,
  },
]

export function PackagesSection() {
  return (
    <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Tour Packages</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose the perfect package for your travel style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative overflow-hidden transition-all duration-300 ${
                pkg.highlighted
                  ? 'ring-2 ring-secondary shadow-2xl transform md:scale-105'
                  : 'hover:shadow-lg'
              }`}
            >
              {pkg.highlighted && (
                <div className="bg-secondary text-white text-center py-2 text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                <p className="text-foreground/70 text-sm mb-4">{pkg.description}</p>

                <div className="mb-6">
                  <div className="text-lg font-semibold text-secondary mb-1">Coming Soon</div>
                  <div className="text-sm text-foreground/60">{pkg.duration} package</div>
                </div>

                <Button
                  className={`w-full mb-8 font-semibold ${
                    pkg.highlighted
                      ? 'bg-secondary hover:bg-secondary/90 text-white'
                      : 'bg-primary hover:bg-primary/90 text-white'
                  }`}
                  disabled
                >
                  Coming Soon
                </Button>

                <div className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="text-secondary" size={20} />
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
