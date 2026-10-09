import React from 'react'
import Title from '../component/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../component/NewsLetter'
import '../css/About.css'

const About = () => {
  return (
    <div className="about">

      {/* About Title */}

      <div className="about-title">
        <Title text1="ABOUT" text2="US" />
      </div>

      {/* About Section */}

      <div className="about-content">

        <div className="about-image">
          <img src={assets.about_img} alt="" />
        </div>

        <div className="about-text">

          <p>
            Forever is a modern fashion brand focused on timeless style,
            quality, and everyday comfort. We bring you carefully selected
            clothing and accessories designed to fit effortlessly into your
            lifestyle.
          </p>

          <p>
            From everyday essentials to stylish statement pieces, Forever
            combines quality, comfort, and contemporary design to help you
            look and feel your best.
          </p>

          <p className="mission-title">
            OUR MISSION
          </p>

          <p>
            At Forever, our mission is to make fashion simple, accessible,
            and meaningful. We aim to provide high-quality products that
            combine modern style, comfort, and affordability.
          </p>

        </div>

      </div>

      {/* Why Choose Us */}

      <div className="why-title">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      <div className="why-content">

        <div className="why-box">
          <b>QUALITY ASSURANCE</b>

          <p>
            We are committed to creating a seamless shopping experience
            while continuously improving our products and services to meet
            the evolving needs of our customers.
          </p>
        </div>

        <div className="why-box">
          <b>CONVENIENCE</b>

          <p>
            Our goal at Forever is to become a trusted fashion destination
            by offering stylish, high-quality, and affordable products for
            everyone.
          </p>
        </div>

        <div className="why-box">
          <b>EXCEPTIONAL CUSTOMER SERVICE</b>

          <p>
            We aim to make online shopping simple, convenient, and enjoyable,
            while building long-lasting relationships with our customers
            through quality products and excellent service.
          </p>
        </div>

      </div>

      <NewsLetter />

    </div>
  )
}

export default About