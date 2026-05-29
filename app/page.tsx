import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { DestinationsSection } from '@/components/destinations-section'
import { PackagesSection } from '@/components/packages-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { NewsletterSection } from '@/components/newsletter-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <HeroSection />
      <DestinationsSection />
      <PackagesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
