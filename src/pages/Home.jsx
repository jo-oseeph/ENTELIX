import React from 'react'
import HeroSection from '../components/Hero.jsx'
import AboutSection from '../components/About.jsx'
// import OurServices from '../components/Services.jsx'
import PortfolioSection from '../components/Portfolio.jsx'
import CTABanner from '../components/Banner.jsx'
import ServicesSection from '../components/ServicesSection'
const Home = () => {
  return (
    <div>
   
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection/>  
      {/* <OurServices /> */} 
      <CTABanner />

    </div>
  )
}

export default Home
