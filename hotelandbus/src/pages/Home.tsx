import './Home.css'

import React from 'react'

import Featured from '../components/featured/Featured'
import Header from '../components/header/Header'
import Nav from '../components/navbar/Nav'

const Home = () => {
  return (
    <div>
      <Nav />
      <Header type={''} />
      <div className="homeContainer">
        <Featured />
      </div>
    </div>
  )
}

export default Home
