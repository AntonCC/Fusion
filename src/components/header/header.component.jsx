import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './header.styles.scss'
import Hamburger from '../hamburger/hamburger.component'

const Header = () => {
  const [inProp, setInProp] = useState(true)

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
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <NavLink className="btn-buy" to="/buy">Buy Now</NavLink>
          </nav>
          <Hamburger className="hamburger" onClick={() => setInProp(!inProp)} />
        </div>
      </header>
    </>
  )
}

export default Header