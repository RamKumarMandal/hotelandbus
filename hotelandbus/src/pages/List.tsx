import './List.css'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { DateRange } from 'react-date-range'

import Header from '../components/header/Header'
import Nav from '../components/navbar/Nav'
import { format } from 'date-fns'
import SearchItem from '../components/searchItem/SearchItem'
import Subscribe from '../components/subscribe/Subscribe'
import Footer from '../components/footer/Footer'

const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destinatin)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)
  console.log(options)
  const [openDate, setOpenDate] = useState(false)
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
              <label htmlFor="checkInDate">check In Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                'MM/dd/yyyy',
              )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                  className="listDate"
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">Min Price per night</span>
                <input type="number" className="lsOptionInput" min={0} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max Price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" min={0} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input
                  type="number"
                  className="lsOptionInput"
                  placeholder={options.adult}
                  min={1}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input
                  type="number"
                  className="lsOptionInput"
                  placeholder={options.children}
                  min={0}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input
                  type="number"
                  className="lsOptionInput"
                  placeholder={options.room}
                  min={1}
                />
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResults">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
      <div className="footerwrap">
        <Footer />
      </div>
    </div>
  )
}

export default List
