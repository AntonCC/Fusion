import React from 'react'
import './card.styles.scss'


const Card = (props) => {
  return (
    <>
      <div className="card">
        <h1>{props.title}</h1>
        <h3>{props.subTitle}</h3>
        <p>{props.body}</p>
      </div>
    </>
  )
}
export default Card



