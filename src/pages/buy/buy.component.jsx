import React from 'react'
import './buy.styles.scss'
import ProductBuy from '../../components/product-buy/product-buy.component'
import ProductBanner from '../../components/product-banner/product-banner.component'

const Buy = () => {
  return (
    <div className="buy">
      <div className="container">
        <ProductBanner />
      </div>
      <div className="product-container">
        <ProductBuy />
        <ProductBuy />
        <ProductBuy />
      </div>
    </div>
  )
}
export default Buy