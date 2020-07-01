import React from 'react'
import AboutLanding from '../../components/about-landing/about-landing.component'
import TextCards from '../../components/text-cards/text-cards.component'
import Banner from '../../components/banner/banner-component'
import { cardInfoTop, cardInfoBottom, bannerInfo } from './about-info'



const About = () => {
  return (
    <div className="about">
      <AboutLanding />
      <TextCards cardInfo={cardInfoTop} />
      {bannerInfo.map(info => (
        <Banner key={info.id} bannerInfo={info} />
      ))}
      <TextCards cardInfo={cardInfoBottom}/>
    </div>
  )
}
export default About