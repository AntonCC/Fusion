import React from 'react'
import './text-cards.styles.scss'
import TextCard from '../text-card/text-card.component'


const TextCards = (props) => {
  return (
    <div className="text-cards">
      <div className="container">
        {props.cardInfo.map(info => (
          <TextCard key={info.id} info={info} />
        ))}
      </div>
    </div>
  )
}
export default TextCards