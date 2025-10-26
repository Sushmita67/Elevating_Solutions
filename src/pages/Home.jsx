import React from 'react'
import Hero from '../components/sections/Hero'
import StatsSection from '../components/sections/StatsSection'
import ProductPortfolio from '../components/sections/ProductPortfolio'
import ElevatorSection from '../components/sections/ElevatorSection'
import ContactSection from '../components/sections/ContactSection'
import CTA from '../components/sections/CTA'

const Home = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <ProductPortfolio />
      <div id="elevator-section">
        <ElevatorSection />
      </div>
      <div id="contact-section">
        <ContactSection />
      </div>
      <CTA />
    </>
  )
}

export default Home
