import React from 'react'
import './Services.css'
import serviceImg1 from '../../assets/service-1.png'
import serviceImg2 from '../../assets/service-2.png'
import serviceImg3 from '../../assets/service-3.png'
import { motion } from 'framer-motion'

const Services = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration:0.4,
        ease: 'easeIn',
      },
    },
  };

  const services = [
      {
          id:1, 
          textCH: "预定自取",
          text: "Self pick-up",
          img: serviceImg1,
      },
      {
          id:2, 
          textCH: "堂食",
          text: "Dine-in",
          img: serviceImg2,
      },
      {
          id:3, 
          textCH: "上门现烧",
          text: "Event function",
          img: serviceImg3,
      },
  ]


  return (
    <div className='services container'>
       <h2>
        <span className='text-ch'>服务</span>
        Services
      </h2>

      <motion.div variants={containerVariants}
      initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
      className="services-grid">
        {services.map((service,idx) => {
            return <motion.div variants={cardVariants} key={idx} className='service-card'>
                
                <img src={service.img} alt={service.text} />
            
                <div className='service-card-text'>
                    <p className='text-ch'>{service.textCH}</p>
                    
                    <p>{service.text}</p>
                </div>
            </motion.div>
        })}
      </motion.div>
    </div>
  )
}

export default Services
