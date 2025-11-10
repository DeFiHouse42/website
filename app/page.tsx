"use client"
import Navigation from "@/components/navigation"
import LandingHero from "@/components/sections/landing-hero"
import EventsSection from "@/components/sections/events-section"
import PartnershipsSection from "@/components/sections/partnerships-section"
import ProductsSection from "@/components/sections/products-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navigation />
      <LandingHero />
      <EventsSection />
      <PartnershipsSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
