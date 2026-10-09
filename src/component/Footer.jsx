import React from 'react'
import { assets } from '../assets/assets'
import '../css/ComponentCss/Footer.css'

const Footer = () => {
  return (
    <div className="footer">

      <div className="footer-content">

        <div className="footer-about">
          <img className="footer-logo" src={assets.logo} alt="" />

          <p className="footer-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus minima vero autem esse quae nihil earum
            deleniti, quisquam magni fugiat.
          </p>
        </div>

        <div className="footer-company">
          <p className="footer-heading">
            COMPANY
          </p>

          <ul className="footer-list">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-contact">
          <p className="footer-heading">
            GET IN TOUCH
          </p>

          <ul className="footer-list">
            <li>+1-22-3456-2345</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <hr />
        <p>Copyright 2026 @forever.com -- All right reserved</p>
      </div>

    </div>
  )
}

export default Footer