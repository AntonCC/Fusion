import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.styles.scss'

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <h1>Fusion</h1>
          </div>
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/">About</NavLink></li>
              <li><NavLink to="/">Contact</NavLink></li>
            </ul>
            <NavLink className="btn-buy" to="/">Buy Now</NavLink>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header