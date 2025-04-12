import React from 'react'
import './Contact.css'
import { FaLocationDot, FaPhone, FaRegClock  } from "react-icons/fa6";
import { SiGooglemaps,SiWaze  } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";

const Contact = () => {
    const contactList = [
        {
          id:1,
          icon: FaLocationDot,
          title: 'Address',
          lines: ['Taman Megaway, 70400 ',
          'Seremban, Negeri Sembilan'],
          googleMapUrl: 'https://www.google.com/maps/dir//312,+Jalan+Pinang+Gading+2,+Taman+Megaway,+70400+Seremban,+Negeri+Sembilan/@2.7047201,101.9249021,6929m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x31cddddfba4d6e37:0xadcd3d972dc00862!2m2!1d101.9598803!2d2.7410832?entry=ttu&g_ep=EgoyMDI1MDQwNy4wIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D',
          wazeUrl: 'https://waze.com/ul?ll=2.7410832,101.9598803&navigate=yes',
        },
        {
          id:2,
          icon: FaPhone,
          title: 'Phone',
          lines: ['011-3798 2686 (Mok)',
          '017-227 9039 (Ms Teo)'],
          links: ['https://wa.me/601137982686','https://wa.me/60172279039']
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
                if (list.links && list.links[idx]){
                  return <div className="contact-link" key={idx}>
                    <a key={idx} href={list.links[idx]} target="_blank"
                      rel="noopener noreferrer">
                      <SiWhatsapp className='contact-link-icon'/>
                      {line}
                    </a>
                  </div>
                  
                }
                else{
                  return <p key={idx}>{line}</p>
                }
              })}

              {list.title === "Address" && (
                <div className='map-links'>
                  <a href={list.googleMapUrl}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <SiGooglemaps className='icon'/>
                    Open in Google Maps    
                  </a>    

                  <a href={list.wazeUrl}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <SiWaze className='icon'/>
                    Open in Waze    
                  </a>    

                </div>
              )}
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Contact
