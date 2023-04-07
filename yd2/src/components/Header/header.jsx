import React from 'react'
import "./header.css"
import LOGO from "../../assets/Logo.png"

const header = () => {
  return (
    <div className='container__header'>

      <div className='container__header-img'>
        <img src={LOGO} alt='YD-logo' placeholder='LOGO'/>
      </div>
      
 
      <h2 className="header__title">Where Every Design has a Story</h2>

      <button className='btn'> SHOP NOW</button>
    </div>
  )
}

export default header
