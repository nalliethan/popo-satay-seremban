import React from 'react'
import './Menu.css'
import menuTitle from '../../assets/menu.png'
import satayImg from '../../assets/satay.png'
import menuImg3 from '../../assets/menu-3.jpg'
import menuImg4 from '../../assets/menu-4.jpg'

const Menu = () => {
  const menuItems = [
    {
      id: 1, 
      textCH: "鸡肉",
      text: "Chicken",
      img: satayImg
    },
    {
      id: 2, 
      textCH: "猪肉",
      text: "Pork",
      img: satayImg
    },
    {
      id: 3, 
      textCH: "粉肠",
      text: "Pork Intestine",
      img: menuImg3
    },
    {
      id: 4, 
      textCH: "饭团",
      text: "Ketupat",
      img: menuImg4
    },
  ]

  return (
    <div className='menu container'> 
      <h2>
        <span className='text-ch'>菜单</span>
        Menu
      </h2>

      <div className='menuItems'>
        {menuItems.map((item,idx) => {
          return <div key={idx} className='item'>
            <img src={item.img} alt="" />

            <p className='text-ch'>{item.textCH}</p>
                
            <p>{item.text}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Menu
