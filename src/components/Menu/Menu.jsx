import React from 'react'
import './Menu.css'
import menuImg1 from '../../assets/menu-1.jpeg'
import menuImg2 from '../../assets/menu-2.jpeg'
import menuImg3 from '../../assets/menu-3.jpg'
import menuImg4 from '../../assets/menu-4.jpg'
import { motion } from 'framer-motion'

const Menu = () => {
  const menuItems = [
    {
      id: 1, 
      textCH: "鸡肉",
      text: "Chicken",
      img: menuImg1,
    },
    {
      id: 2, 
      textCH: "猪肉",
      text: "Pork",
      img: menuImg2,
    },
    {
      id: 3, 
      textCH: "粉肠",
      text: "Pork Intestine",
      img: menuImg3,
    },
    {
      id: 4, 
      textCH: "饭团",
      text: "Ketupat",
      img: menuImg4,
    },
  ]

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

  return (
    <div className='menu container'> 
      <h2>
        <span className='text-ch'>菜单</span>
        Menu
      </h2>

      <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className='menuItems'>
        {menuItems.map((item,idx) => {
          return <motion.div variants={cardVariants} key={idx} className='item'>
            <img src={item.img} alt="" />

            <p className='text-ch'>{item.textCH}</p>
                
            <p>{item.text}</p>
          </motion.div>
        })}
      </motion.div>
    </div>
  )
}

export default Menu
