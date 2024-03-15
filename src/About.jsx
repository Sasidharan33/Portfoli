import React from 'react'
import a1 from './images/undraw/undraw_software_engineer_lvl5.svg'
function About() {
  return (
    <div className='about-container'>
      <div className='about-left'>
        <small className='welcome'>Welcome to my portfolio website!</small>
        <h1 className='about-heading'><span>Hey folks, I'm</span> <span className='mmain'></span></h1>
        <p className='about-paragraph'>Building a successful product is a challenge.
             I am highly energetic in user experience design, 
             interfaces and web development.</p>
             <button className='download-button'>Download Resume</button>
             <button className='get-button'>Get a free quote</button>
      </div>
      <div className='about-right'>
        <img className='about-image' src={a1} alt="photo" />
      </div>
    </div>
  )
}

export default About
