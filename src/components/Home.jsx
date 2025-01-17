import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Poster from './Poster'
import OurClasses from './OurClasses'
import Price from './Price'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Poster />
      <OurClasses />
      <Price />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
