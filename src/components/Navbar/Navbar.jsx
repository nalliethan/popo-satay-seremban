import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='nav-logo'/>

      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
