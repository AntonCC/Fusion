import React from 'react'
import { NavLink } from 'react-router-dom'
import './home-landing.styles.scss'

const HomeLanding = () => {
  return (
    <div className="landing">
      <div className="container">
        <h1>Laptop Conveinence. Desktop Performance.</h1>
        <h3>Count On Fusion Laptops For Your Project's Needs</h3>
        <NavLink to="/">Buy Now</NavLink>
      </div>
    </div>
  )
}

export default HomeLanding