import React from 'react'
import Nav from '../components/navbar/Nav'
import Header from '../components/header/Header'
import Featured from '../components/featured/Featured'
import './Home.css'

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
