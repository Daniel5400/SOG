import React from 'react'
import MainHeader from '../Components/MainHeader'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import House from '../Components/House'
import ContactUs from './ContactUs'

const Landing = () => {
  return (
    <div style={{backgroundColor:'#fff'}}>
      <MainHeader/>
      <Hero/>
      <House/>
      <ContactUs/>
      
      {/* <Footer/> */}
      
    </div>
  )
}

export default Landing