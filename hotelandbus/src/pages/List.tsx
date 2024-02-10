import './List.css'

import React from 'react'

import Header from '../components/header/Header'
import Nav from '../components/navbar/Nav'

const List = () => {
  return (
    <div>
      <Nav />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="title">Search</h1>
            <div className="lsItem">
              <label htmlFor="destination">Destination</label>
              <input name="destination" type="text" />
            </div>
            <div className="lsItem">
              <label htmlFor="checkInDate">checkInDate</label>
              <input name="checkInDate" type="text" />
            </div>
          </div>
          <div className="listResults">Results</div>
        </div>
      </div>
    </div>
  )
}

export default List
