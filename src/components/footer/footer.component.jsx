import React, { useState } from 'react'
import './footer.styles.scss'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const [formValue, setFormValue] = useState({email: null})

  const handleChange = (e) => {
    const { value } = e.target
    setFormValue({ formValue: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("Email submitted: " + formValue.email);
  }


 return (
    <div className="footer">
      <div className="container">
        <div className="column">
          <div className="social-media">
            <h3>Follow us on: </h3>
            <div className="icons">
              <i className="fab fa-facebook-square fa-2x"></i>
              <i className="fab fa-twitter-square fa-2x"></i>
              <i className="fab fa-youtube-square fa-2x"></i>
            </div>
          </div>
          <div className="email">
            <h3>Sign Up For Our NewLetter:</h3>
            <form action="#" onSubmit={handleSubmit}>
              <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} required/>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="column">
          <h3>Company Info</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">About</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
            <li><NavLink to="/">Privacy Policy</NavLink></li>
            <li><NavLink to="/">Term Of Service</NavLink></li>
          </ul>
        </div>
        <div className="column">
          <h3>About Fusion</h3>
          <ul>
            <li><NavLink to="/">New Products</NavLink></li>
            <li><NavLink to="/">Store Locations</NavLink></li>
            <li><NavLink to="/">Product List</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Footer