import React from 'react'
import './sidebar.styles.scss'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ open, handleSidebar }) => {
  return (
    <nav className={`sidebar ${open ? 'open' : ''}`}>
      <ul>
        <li><NavLink exact to="/" onClick={handleSidebar}>Home</NavLink></li>
        <li><NavLink exact to="/" onClick={handleSidebar}>About Us</NavLink></li>
        <li><NavLink exact to="/" onClick={handleSidebar}>Contact</NavLink></li>
      </ul>
        <NavLink className="btn-buy" to="/buy">Buy Now</NavLink>
    </nav>
  )
}
export default Sidebar