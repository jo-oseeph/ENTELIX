import React from 'react'
import Navbar from '../components/Navbar.jsx'
import HeroSection from '../components/Hero.jsx'
import AboutSection from '../components/About.jsx'
import OurServices from '../components/Services.jsx'
import PortfolioSection from '../components/Portfolio.jsx'
import CTABanner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'
const Home = () => {
  return (
    <div>
   
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <OurServices />
      <CTABanner />

    </div>
  )
}

export default Home
