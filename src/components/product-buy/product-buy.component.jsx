import React from 'react'
import './product-buy.styles.scss'
import ProductLaptop from '../../imgs/product-laptop.png'

const ProductBuy = (props) => {
  const { name, crossPrice, activePrice, savings, processor, os, graphics, ram, screen, weight} = props
  return (
    <div className="product-buy">
      <div className="product-img">
        <img src={ProductLaptop} alt="Laptop"/>
      </div>
      <h3>{ name }</h3>
      <div className="price">
        <div className="cross-out">{ crossPrice }</div>
        <div className="active">{ activePrice }</div>
      </div>
      <ul>
        <li>{ processor }</li>
        <li>{ os }</li>
        <li>{ graphics }</li>
        <li>{ ram }</li>
      </ul>
      <div className="size-weight">
        <div className="display">
          <i className="fas fa-laptop fa-2xl"></i>
          <span>{screen}-in screen</span>
        </div>
        <div className="weight">
          <i className="fas fa-balance-scale"></i>
          <span>Starts at { weight }lbs</span>
        </div>
      </div>
      <div className="questions-number">
        <span><strong>Have any questions?</strong> Feel free to call us at 1.999.888.7777</span>
      </div>
      <div className="purchase">
        <div className="value-line">
          <span>Est. Value</span>
          <span>{ crossPrice }</span>
        </div>
        <div className="value-line">
          <div className="blue">Total Savings</div>
          <span>{ savings }</span>
        </div>
        <div className="value-line">
          <span>Ground Delivery</span>
          <span>Free</span>
        </div>
        <div className="value-line">
          <span>Fusion Price</span>
          <span><strong>{ activePrice}</strong></span>
        </div>
        <button className="purchase-btn" onClick={() => alert('Thank you for your purchase!')}>Buy</button>
      </div>
    </div>
  )
}
export default ProductBuy