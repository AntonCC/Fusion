import React from 'react'
import './perk.styles.scss'

const Perk = (props) => {
  return (
    <div className="perk">
      <i className={props.icon} style={{ color: props.color }}></i>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  )
}

export default Perk