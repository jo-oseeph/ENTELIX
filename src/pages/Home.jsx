import React from 'react'
import Navbar from '../components/Navbar.jsx'
import HeroSection from '../components/Hero.jsx'
import AboutSection from '../components/About.jsx'
import OurServices from '../components/Services.jsx'
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OurServices />
    </div>
  )
}

export default Home
