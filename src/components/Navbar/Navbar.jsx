import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-scroll';

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

      <IoMenu className='menu-bar'/>
    </nav>
  )
}

export default Navbar
