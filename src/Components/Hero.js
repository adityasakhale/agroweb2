import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css'

const Home = () => {
  return (
   <div id='hero' className='home'>
    <div className='container grid grid-two-column'>
        <div className='section-hero-data'>
            <h1 className='hero-heading'>DHANSHREE AGROTECH</h1>
            <p className='hero-para'>धनश्री ॲग्रोटेक आमच्याकडे ऊस, भाजीपालासाठी लागणारे  कोकोपीट व
             नर्सरीसाठी आवश्यक असणारे सर्व साहित्य योग्य दरात मिळेल.
            </p>
            <button className='contact-btn'>
            <a className='contact' href='./contact'> <AnchorLink className='anchor-link' offset={50} href='#contact'>Contact us</AnchorLink></a>
            </button>
        </div>
    </div>
   </div>
  )
}

export default Home
