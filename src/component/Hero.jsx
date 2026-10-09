import React from 'react'
import { assets } from "../assets/assets"
import "../css/ComponentCss/Hero.css"

const Hero = () => {
  return (
    <div className="hero">

      <div className="hero-content">

        <div className="hero-text">

          <div className="hero-title">
            <p className="line"></p>
            <p>OUR BESTSELLERS</p>
          </div>

          <h1>Latest Arrivals</h1>

          <div className="hero-shop">
            <p>SHOP NOW</p>
            <p className="line"></p>
          </div>

        </div>

      </div>

      <img
        className="hero-image"
        src={assets.hero_img}
        alt="Latest Arrivals"
      />

    </div>
  )
}

export default Hero
