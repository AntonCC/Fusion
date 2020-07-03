import React from 'react'
import ContactInfo from '../../components/contact-info/contact-info.component'
import ContactLanding from '../../components/contact-landing/contact-landing.component'

const Contact = () => {
  return (
    <div className="contact">
      <ContactLanding />
      <ContactInfo />
    </div>
  )
}
export default Contact