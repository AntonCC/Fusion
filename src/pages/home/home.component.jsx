import React from 'react'
import './home.styles.scss'
import HomeLanding from '../../components/home-landing/home-landing.component'
import Perks from '../../components/perks/perks.component'

const Home = () => {
  return (
    <div>
      <HomeLanding />
      <Perks />
    </div>
  )
}

export default Home