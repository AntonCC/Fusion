import React from 'react'
import AboutLanding from '../../components/about-landing/about-landing.component'
import TextCards from '../../components/text-cards/text-cards.component'
import Banner from '../../components/banner/banner-component'
import { cardInfo, bannerInfo } from './about-info'



const About = () => {
  return (
    <div className="about">
      <AboutLanding />
      <TextCards cardInfo={cardInfo} />
      {bannerInfo.map(info => (
        <Banner bannerInfo={info} />
      ))} 
    </div>
  )
}
export default About