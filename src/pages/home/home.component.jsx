import React from 'react'
import './home.styles.scss'
import { bannerInfo } from './home-info.jsx'
import { motion } from 'framer-motion'
import HomeLanding from '../../components/home-landing/home-landing.component'
import Perks from '../../components/perks/perks.component'
import Banner from '../../components/banner/banner-component'
import Cards from '../../components/cards/cards.components'

const Home = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <HomeLanding />
      <Perks />
      <Banner bannerInfo={bannerInfo} />
      <Cards />
    </motion.div>
  )
}

export default Home