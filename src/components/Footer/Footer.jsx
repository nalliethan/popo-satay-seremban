import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className='container'>
        <div className='footer-flex'>
            <img src={logo} alt="Popo satay logo" />

            <ul>
              <li>
                <Link to='hero' smooth={true} offset={0} duration={300}>
                Home
                </Link>
              </li>
              <li>
                <Link to='menu' smooth={true} offset={-40} duration={300}>
                Menu
                </Link>
              </li>
              <li>
                <Link to='services' smooth={true} offset={-40} duration={300}>
                Services
                </Link>
              </li>
              <li>
                <Link to='contact' smooth={true} offset={0} duration={300}>
                Contact
                </Link>  
              </li>
            </ul>
        </div>

        <p>Copyright 2025 (C) Popo Satay Seremban</p>
        
    </footer>
  )
}

export default Footer
