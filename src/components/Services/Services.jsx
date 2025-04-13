import React from 'react'
import './Services.css'
import serviceImg1 from '../../assets/service-1.png'
import serviceImg2 from '../../assets/service-2.png'
import serviceImg3 from '../../assets/service-3.png'

const Services = () => {
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

      <div className="services-grid">
        {services.map((service,idx) => {
            return <div key={idx} className='service-card'>
                
                <img src={service.img} alt={service.text} />
            
                <div className='service-card-text'>
                    <p className='text-ch'>{service.textCH}</p>
                    
                    <p>{service.text}</p>
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Services
