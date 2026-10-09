import React from 'react'
import { assets } from '../assets/assets'
import '../css/ComponentCss/OurPolicy.css'

const OurPolicy = () => {
  return (
    <div className="our-policy">

      <div className="policy-box">
        <img src={assets.exchange_icon} alt="" />

        <p>EASY EXCHANGE POLICY</p>

        <p>WE OFFER FREE EXCHANGE POLICY</p>
      </div>

      <div className="policy-box">
        <img src={assets.quality_icon} alt="" />

        <p>7 DAY RETURN POLICY</p>

        <p>WE PROVIDE 7 DAYS FREE RETURN POLICY</p>
      </div>

      <div className="policy-box">
        <img src={assets.support_img} alt="" />

        <p>BEST CUSTOMER SUPPORT</p>

        <p>WE PROVIDE 24/7 CUSTOMER SUPPORT</p>
      </div>

    </div>
  )
}

export default OurPolicy