import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Menu from './components/Menu/Menu.jsx'
import Services from './components/Services/Services.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Menu/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
