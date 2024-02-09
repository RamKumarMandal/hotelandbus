import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className="sub">
      <div className="subTitle">
        <h2>Save time, save money!</h2>
      </div>
      <div className="subAim">Sign up and we'll send the best deals to you</div>
      <div className="subInputButton">
        <input type="email" placeholder="Your Email Address here" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Subscribe
