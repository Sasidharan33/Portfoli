import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
function Navbar({setcolor,setbackcolor,color,backcolor}) {
    const changecolor = () => {
      setcolor(color === 'white'?'black':'white');
      setbackcolor(backcolor === 'black'?'white':'black')
    }
  return (
    <div className='Navbar' >
      <h4 className='color-span'><FaUser className='moon' />Sasidharan</h4>
      <a style={{backgroundColor:backcolor,color:color}} href="">Home</a>
      <a style={{backgroundColor:backcolor,color:color}} href="">About</a>
      <a style={{backgroundColor:backcolor,color:color}} href="">Project</a>
      <a style={{backgroundColor:backcolor,color:color}} href="">contact</a>
      <button  style={{backgroundColor:backcolor,color:color}} onClick={changecolor}><FaMoon className='moon'/>Color mode</button>
    </div>
  )
}

export default Navbar
