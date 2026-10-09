import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import '../css/ComponentCss/NavBar.css'
import { ShopContext } from '../context/ShopContext'

const NavBar = () => {
  const [visible, setVisible] = useState(false)

  const {
    setShowSearch,
    getCartCount
  } = useContext(ShopContext)

  return (
    <div className="navbar">

      {/* Logo */}
      <div className="nav-logo">
        <Link to="/">
          <img src={assets.logo} alt="Logo" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="nav-links">

        <NavLink to="/">
          <p>HOME</p>
        </NavLink>

        <NavLink to="/collection">
          <p>COLLECTION</p>
        </NavLink>

        <NavLink to="/about">
          <p>ABOUT</p>
        </NavLink>

        <NavLink to="/contact">
          <p>CONTACT</p>
        </NavLink>

      </ul>

      {/* Icons */}
      <div className="nav-icons">

        <img
          onClick={() => setShowSearch(true)}
          className="nav-icon"
          src={assets.search_icon}
          alt="Search"
        />

        <div className="profile-container">

          <Link to="/login">
            <img
              className="nav-icon profile-icon"
              src={assets.profile_icon}
              alt="Profile"
            />
          </Link>

          <div className="profile-dropdown">
            <p>My Profile</p>
            <p>Orders</p>
            <p>Logout</p>
          </div>

        </div>

        <Link to="/cart" className="cart-container">

          <img
            className="nav-icon"
            src={assets.cart_icon}
            alt="Cart"
          />

          <p>{getCartCount()}</p>

        </Link>

        <img
          onClick={() => setVisible(true)}
          className="menu-icon"
          src={assets.menu_icon}
          alt="Menu"
        />

      </div>

      {/* Mobile Menu */}

      <div className={`mobile-menu ${visible ? 'show-menu' : ''}`}>

        <div className="mobile-menu-content">

          <div
            className="back-btn"
            onClick={() => setVisible(false)}
          >
            <img
              src={assets.dropdown_icon}
              alt="Back"
            />

            <p>Back</p>
          </div>

          <NavLink onClick={() => setVisible(false)} to="/">
            HOME
          </NavLink>

          <NavLink onClick={() => setVisible(false)} to="/collection">
            COLLECTION
          </NavLink>

          <NavLink onClick={() => setVisible(false)} to="/about">
            ABOUT
          </NavLink>

          <NavLink onClick={() => setVisible(false)} to="/contact">
            CONTACT
          </NavLink>

        </div>

      </div>

    </div>
  )
}

export default NavBar