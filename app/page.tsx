import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import TeamSection from '@/components/TeamSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import { getServices, getTeamMembers, getTestimonials } from '@/lib/cosmic'

export default async function HomePage() {
  const [services, team, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getTestimonials(),
  ])

  return (
    <>
      <Hero />
      <ServicesSection services={services} />
      <TeamSection team={team} />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
    </>
  )
}