import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])

  return (
    <nav className={`container ${sticky ? "dark-nav": ''}`}>
      <img src={logo} alt="" className='nav-logo'/>

      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      <IoMenu className='menu-bar'/>
    </nav>
  )
}

export default Navbar
