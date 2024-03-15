import React from 'react'

function Aboutme() {
  return (
    <div className='aboutme-main'>
      <h1>About <span className='color-span'>Me</span></h1>
      <div className='aboutme-left'>
        <h3>Personal Info</h3>
        <div className='aboutme-left1'>
            <ul>
                <li>
                    First Name: <span className='color-span'>Sasidharan</span>
                </li>
                <li>
                    Age: <span className='color-span'>22 Years</span>
                </li>
                <li>
                    Location: <span className='color-span'>Tiruppur</span>
                </li>
                <li>
                    Email: <span className='color-span'>dharansasi566@gmail.com</span>
                </li>
            </ul>
            <button className='viewcv'>View CV</button>
            
        </div>
        <div className='aboutme-left2'>
            <ul>
                <li>
                    Last Name: <span className='color-span'>G</span>
                </li>
                <li>
                    Nationality: <span className='color-span'>Indian</span>
                </li>
                <li>
                    Phone: <span className='color-span'>+91-6384784423</span>
                </li>
                <li>
                    Languages: <span className='color-span'>Tamil,English</span>
                </li>
            </ul>
        </div>
      </div>
      <div className='aboutme-right'>
        <div className='aboutme-right1'>
         <h1>Fresher</h1>
         <h6>Looking for a great <br />opportunity</h6>
        </div>
        <div className='aboutme-right2'>
            <h1>Certification</h1>
            <h6>Full stack Developer <br />Nschool Academy</h6>
        </div>
      </div>
    </div>
  )
}

export default Aboutme
