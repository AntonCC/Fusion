import React from 'react'
import './text-card.styles.scss'

const TextCard = (props) => {
  const { title, body } = props.info
  return (
    <div className="text-card">
      <h4>{ title }</h4>
      <p>{ body }</p>
    </div>
  )
}
export default TextCard