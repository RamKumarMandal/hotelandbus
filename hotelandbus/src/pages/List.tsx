import './List.css'

import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import Header from '../components/header/Header'
import Nav from '../components/navbar/Nav'
import { format } from 'date-fns'

const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destinatin)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.option)
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
              <input name="destination" type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label htmlFor="checkInDate">checkInDate</label>
              <span>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                date[0].endDate,
                'MM/dd/yyyy',
              )}`}</span>
            </div>
          </div>
          <div className="listResults">
            <h1 className="Results">Results</h1>
            <h1 className="Results">Results</h1>
            <h1 className="Results">Results</h1>
            <h1 className="Results">Results</h1>
            <h1 className="Results">Results</h1>
            <h1 className="Results">Results</h1>
            <h1 className="Results">Results</h1>
            <h1 className="Results">Results</h1>
            <h1 className="Results">Results</h1>
            <h1 className="Results">Results</h1>
            <h1 className="Results">Results</h1>
            <h1 className="Results">Results</h1>
            <h1 className="Results">Results</h1>
            <h1 className="Results">Results</h1>
            <h1 className="Results">Results</h1>
            <h1 className="Results">Results</h1>
            <h1 className="Results">Results</h1>
            <h1 className="Results">Results</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
