import React from 'react'
import './Hero.css'
import heroImg from '../../assets/hero.jpg'
import logo from '../../assets/logo.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-left'>
        <img src={logo} alt="popo satay logo" />
        <h1>Welcome to Popo Satay Seremban!</h1>
        <button>Contact Now!</button>
      </div>


      <div className="hero-img">
        <img src={heroImg} alt=""/>
      </div>
      
      
    </div>
  )
}

export default Hero
