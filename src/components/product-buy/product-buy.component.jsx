import React from 'react'
import './product-buy.styles.scss'
import ProductLaptop from '../../imgs/product-laptop.png'

const ProductBuy = () => {
  return (
    <div className="product-buy">
      <div className="product-img">
        <img src={ProductLaptop} alt="Laptop"/>
      </div>
      <h3>Fusion 14 5000 Laptop</h3>
      <div className="price">
        <div className="cross-out">$500</div>
        <div className="active">$425</div>
      </div>
      <ul>
        <li>Intel Pentium Gold Processor 5405U</li>
        <li>Windows 10 Home Edition</li>
        <li>Intel UHD Graphics 610</li>
        <li>8GB DDR4, 2666 MHZ</li>
      </ul>
      <div className="size-weight">
        <div className="display">
          <i className="fas fa-laptop fa-2xl"></i>
          <span>14-in screen</span>
        </div>
        <div className="weight">
          <i className="fas fa-balance-scale"></i>
          <span>Starts at 3lbs</span>
        </div>
      </div>
      <div className="questions-number">
        <span><strong>Have any questions?</strong> Feel free to call us at 1.999.888.7777</span>
      </div>
      <div className="purchase">
        <div className="value-line">
          <span>Est. Value</span>
          <span>$500</span>
        </div>
        <div className="value-line">
          <div className="blue">Total Savings</div>
          <span>$75</span>
        </div>
        <div className="value-line">
          <span>Ground Delivery</span>
          <span>Free</span>
        </div>
        <div className="value-line">
          <span>Fusion Price</span>
          <span><strong>$425</strong></span>
        </div>
        <button className="purchase-btn">Buy</button>
      </div>
    </div>
  )
}
export default ProductBuy