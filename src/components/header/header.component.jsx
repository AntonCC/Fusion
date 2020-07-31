import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.styles.scss'
import Hamburger from '../hamburger/hamburger.component'

const Header = ({ handleSidebar }) => {
  return (
    <header>
      <div className="container">
        <NavLink to="/" className="logo">
          <h1>Fusion</h1>
        </NavLink>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <NavLink className="btn-buy" to="/buy">Buy Now</NavLink>
        </nav>
        <div className="hamburger-container" onClick={handleSidebar}>
          <Hamburger className="hamburger" />
        </div>
      </div>
    </header>
  )
}

export default Header