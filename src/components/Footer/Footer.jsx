import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className='container'>
        <div className='footer-flex'>
            <img src={logo} alt="Popo satay logo" />

            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>

        <p>Copyright 2025 (C) Popo Satay Seremban</p>
        
    </footer>
  )
}

export default Footer
