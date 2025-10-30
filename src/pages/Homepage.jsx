import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { Achivement } from '../components/Achivement'
import { WhyChooseUs } from '../components/WhyChooseUs'
import Services from '../components/Services'
import Team from '../components/Team'
import TestMonial from '../components/TestMonial'
import Contactus from '../components/Contactus'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
     <div className="relative w-full h-screen overflow-hidden">
      <Navbar />
      <Hero />
    </div>
      <Achivement/>
      <WhyChooseUs/>
      <Services/>
      <Team/>
      <TestMonial/>
      <Contactus/>
      <Footer/>



    </div>
  )
}

export default Homepage