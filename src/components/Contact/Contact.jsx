import React from 'react'
import './Contact.css'
import { FaLocationDot, FaPhone, FaRegClock  } from "react-icons/fa6";

const Contact = () => {
    const contactList = [
        {
          id:1,
          icon: FaLocationDot,
          title: 'Address',
          lines: ['Taman Megaway, 70400 ',
          'Seremban, Negeri Sembilan'],
        },
        {
          id:2,
          icon: FaPhone,
          title: 'Phone',
          lines: ['011-3798 2686 (Mok)',
          '017-227 9039 (Ms Teo)'],
        },
        {
          id:3,
          title:'Contact',
          icon: FaRegClock,
          lines: ['Wednesday & Saturday', '16:00 - 21:00'],
      },
    ]


  return (
    <div className='contact container'>
      <h2>Contact Us Now!</h2>
      
      <div className="contact-grid">
        {contactList.map((list) => {
          return <div key={list.id} className='contact-list'>
            <div className="contact-title">
              <list.icon className='contact-icon'/>
              <h3>{list.title}</h3>
            </div>
            
            <div className="contact-text">
              {list.lines.map((line,idx) => {
                return <p key={idx}>{line}</p>
              })}
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Contact
