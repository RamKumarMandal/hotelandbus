import './Home.css'

import React from 'react'

import Featured from '../components/featured/Featured'
import Header from '../components/header/Header'
import Nav from '../components/navbar/Nav'
import PropertyList from '../components/propertyList/PropertyList'
import FeaturedProperties from '../components/featuredProperties/FeaturedProperties'

const Home = () => {
  return (
    <div>
      <Nav />
      <Header type={''} />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse By Properties Type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes Guests Love</h1>
        <FeaturedProperties />
      </div>
    </div>
  )
}

export default Home
