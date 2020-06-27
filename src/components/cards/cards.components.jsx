import React from 'react'
import './cards.styles.scss'
import Card from '../card/card.component'

const cardInfo = [
  {id: 1, icon: "fas fa-laptop fa-2x", iconColor: "#0652DD", title: "Trade In Your Old Laptop.", subTitle: "Get up to $1000 towards any Fusion laptop purchase", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio ab ratione. Ipsa deleniti sed deserunt vero voluptas quidem illum, libero reiciendis ea ullam tenetur!"},
  {id: 2, icon: "fas fa-robot fa-2x", iconColor: "#833471", title: "Powerful and Intelligent.", subTitle: "All 2020 Fusion laptops feature advanced AI assistance", body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ullam fugiat maxime eius aut consequatur placeat incidunt ratione temporibus aliquid?"}
]

const Cards = () => {
  return (
    <>
      <div className="cards">
        <div className="container">
          {cardInfo.map(({ id, icon, iconColor, title, subTitle, body }) => (
            <Card key={id}  icon={icon} iconColor={iconColor} title={title} subTitle={subTitle} body={body}/>
          ))}
        </div>
      </div>
    </>
  )
}
export default Cards
