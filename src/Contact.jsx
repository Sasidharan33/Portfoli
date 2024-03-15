import React from 'react'

function Contact({setcolor,setbackcolor,color,backcolor}) {
  return (
    <div className='contact-main'>
      <div className='contact-left'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.053301375101!2d77
      .27428264474683!3d11.000059826600104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9a95673dd8dfb%3A0x6effc
      31a8745d016!2sPalladam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710321987707!5m2!1sen!2sin" width="100%" height="450" 
       allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='contact-right'>
        <h2>Interested to work together? Let's talk</h2>
        <input style={{backgroundColor:backcolor,color:color}} className='inp1' type="text" placeholder='Your Name' />
        <input  style={{backgroundColor:backcolor,color:color}} className='inp2' type="text" placeholder='Email' /><br />
        <textarea style={{backgroundColor:backcolor,color:color}} className='inp3' placeholder='Message' ></textarea><br />
        <button className='send'>Send</button>
      </div>
    </div>
  )
}

export default Contact
