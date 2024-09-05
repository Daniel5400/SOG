import React from 'react'
import MainHeader from '../Components/MainHeader'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import CarList from '../Components/CarList'
import ContactUs from './ContactUs'

const Landing = () => {
  return (
    <div style={{backgroundColor:'#fff'}}>
      <MainHeader/>
      <Hero/>
      <CarList/>
      <ContactUs/>
      
      <Footer/>
      
    </div>
  )
}

export default Landing