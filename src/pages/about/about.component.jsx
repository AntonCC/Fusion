import React from 'react'
import { motion } from 'framer-motion'
import AboutLanding from '../../components/about-landing/about-landing.component'
import TextCards from '../../components/text-cards/text-cards.component'
import Banner from '../../components/banner/banner-component'
import { cardInfoTop, cardInfoBottom, bannerInfo } from './about-info'



const About = () => {
  return (
    <motion.div className="about"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1}}
      initial={{ opacity: 0}}
    >
      <AboutLanding />
      <TextCards cardInfo={cardInfoTop} />
      {bannerInfo.map(info => (
        <Banner key={info.id} bannerInfo={info} />
      ))}
      <TextCards cardInfo={cardInfoBottom}/>
    </motion.div>
  )
}
export default About