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
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">About</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header