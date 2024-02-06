import React from 'react'
import './Featured.css'

const featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.pexels.com/photos/7534283/pexels-photo-7534283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="featuredTitles">
          <h2>Dublin</h2>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="featuredTitles">
          <h2>Dublin</h2>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.pexels.com/photos/5178039/pexels-photo-5178039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="featuredTitles">
          <h2>Dublin</h2>
          <h2>123 Properties</h2>
        </div>
      </div>
    </div>
  )
}

export default featured
