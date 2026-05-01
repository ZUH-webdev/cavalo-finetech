import React from 'react'
import Navbar from '../components/landing/Navbar'
import HeroSection from '../components/landing/HeroSection'
import ValueProposition from '../components/landing/ValueProposition'
import TrustTicker from '../components/landing/TrustTicker'
import Services from '../components/landing/Services'
import Process from '../components/landing/Process'
import AboutUs from '../components/landing/AboutUs'
import ContactForm from '../components/landing/ContactForm'
import Footer from '../components/landing/Footer'
import FloatingCTA from '../components/landing/FloatingCTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <TrustTicker />
      <Services />
      <Process />
      <AboutUs />
      <ContactForm />
      <Footer />
      <FloatingCTA />
    </div>
  )
}
