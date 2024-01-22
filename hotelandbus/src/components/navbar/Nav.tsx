import './Navbar.css'

import React from 'react'

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">HotelBooking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Nav
