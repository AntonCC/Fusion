import React from 'react'
import ContactInfo from '../../components/contact-info/contact-info.component'
import './contact.styles.scss'

const Contact = () => {
  return (
    <div className="contact">
      <div className="title-container">
        <h2>Contact Us</h2>
      </div>
      <ContactInfo />
    </div>
  )
}
export default Contact