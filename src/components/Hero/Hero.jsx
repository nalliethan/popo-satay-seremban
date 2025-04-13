import React from 'react'
import './Hero.css'
import heroImg from '../../assets/hero.jpg'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Hero = () => {
  const container = {
    hidden: {
      opacity:0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      // transition: {
      //   duration: duration,
      // }
    }
  }


  return (
    <div className='hero container'>
      <div className='hero-left'>
        <motion.img variants={container} initial="hidden" animate="show" 
        transition={{ duration: 0.5 }}
        src={logo} alt="popo satay logo" />
        <motion.h1
          variants={container} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.3}}>
          Welcome to Popo Satay Seremban!
        </motion.h1>
        <motion.button variants={container} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.6}}>
          <Link to='contact' smooth={true} offset={0} duration={300}>
            Contact Now!
          </Link>
        </motion.button>
      </div>


      <motion.div variants={container} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.3}} className="hero-img">
        <img src={heroImg} alt=""/>
      </motion.div>
      
      
    </div>
  )
}

export default Hero
