import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Home from './Home'
import Projects from './Project'
import Contact from './Contact'

const Master = () => {
  return (
      <>
          <Navbar />
          <Home />
          <Projects />
          <Contact />
          <Footer />
      </>
  )
}

export default Master
