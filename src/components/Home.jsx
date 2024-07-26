import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Poster from './Poster'
import OurClasses from './OurClasses'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Poster />
      <OurClasses />
    </div>
  )
}

export default Home
