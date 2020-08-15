import React from 'react'
import './buy.styles.scss'
import { motion } from 'framer-motion'
import ProductBuy from '../../components/product-buy/product-buy.component'
import ProductBanner from '../../components/product-banner/product-banner.component'

const Buy = () => {
  return (
    <motion.div className="buy"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div className="container">
        <ProductBanner />
      </div>
      <div className="product-container">
        <ProductBuy />
        <ProductBuy />
        <ProductBuy />
      </div>
    </motion.div>
  )
}
export default Buy