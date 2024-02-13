import React from 'react'
import Nav from '../components/navbar/Nav'
import Header from '../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'

const Hotels = () => {
  return (
    <div>
      <Nav />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faMapLocationDot} />
            <span className="addr">Elton st 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent Location -500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airtport taxi
          </span>
        </div>
      </div>
    </div>
  )
}
export default Hotels
