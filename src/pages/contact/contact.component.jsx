import React from 'react'
import { motion } from 'framer-motion'
import ContactInfo from '../../components/contact-info/contact-info.component'
import './contact.styles.scss'

const Contact = () => {
  return (
    <motion.div className="contact"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div className="title-container">
        <h2>Contact Us</h2>
      </div>
      <ContactInfo />
    </motion.div>
  )
}
export default Contact