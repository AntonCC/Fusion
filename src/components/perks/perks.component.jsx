import React from 'react'
import './perks.styles.scss'
import Perk from '../perk/perk.component'

const perkInfo = [
  {id: 1, icon: "fas fa-cog fa-4x", color: "#3a6186", title: "The Right Tool For The Job", body: "Don't settle for anything less than the best. Fusion laptops are ready to handle anything you throw at them."},
  {id: 2, icon: "fas fa-infinity fa-4x", color: "#3a6186", title: "Endless Inovations", body: "We're always looking to push the boundaries of technology. Every Fusion laptop is full of the latest tech."},
  {id: 3, icon: "fas fa-shield-alt fa-4x", color: "#3a6186", title: "Security Focused", body: "Keep personal information on your computer secure. 24/7"},
  {id: 4, icon: "fas fa-award fa-4x", color: "#3a6186", title: "Superb Quality", body: "Fusion laptops are made for the highest quality materials, and tested under rigourous conditions."}
]

const Perks = () => {
  return (
    <div className="perks">
      <div className="container">
        {perkInfo.map(({id, icon, color, title, body}) => (
          <Perk id={id} icon={icon} color={color} title={title} body={body}/>
        ))}
      </div>
    </div>
  )
}

export default Perks