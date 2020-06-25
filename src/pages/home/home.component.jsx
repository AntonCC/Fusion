import React from 'react'
import './home.styles.scss'
import HomeLanding from '../../components/home-landing/home-landing.component'
import Perks from '../../components/perks/perks.component'
import Banner from '../../components/banner/banner-component'
import Cards from '../../components/cards/cards.components'

const Home = () => {
  return (
    <div>
      <HomeLanding />
      <Perks />
      <Banner />
      <Cards />
    </div>
  )
}

export default Home