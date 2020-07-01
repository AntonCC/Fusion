import React, { useState, useEffect } from 'react'
import './banner.styles.scss'

const Banner = (props) => {
  const { img, switchSide, title, subTitle, body } = props.bannerInfo
  const [switchClass, setSwitchClass] = useState(null)

  const backgroundStyle = {
    background: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%'
  }

  useEffect(() => {
    if(switchSide === true) {
      setSwitchClass(" switch")
    }
  }, [])

  return (
    <div className="banner">
      <div className={`container${switchClass ? switchClass : ""}`}>
        <div className="side-a" style={backgroundStyle}>
          {/* Background Img */}
        </div>
        <div className="side-b">
          <h1>{ title }</h1>
          <h2>{ subTitle }</h2> 
          <p>{ body }</p>
        </div>
      </div>
    </div>
  )
}

export default Banner