import React from 'react'
import './perks.styles.scss'
import Perk from '../perk/perk.component'

const Perks = () => {
  return (
    <div className="perks">
      <div className="container">
        <Perk />
        <Perk />
        <Perk />
        <Perk />
      </div>
    </div>
  )
}

export default Perks