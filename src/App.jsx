import About from './About'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Projects';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Navbar from './Navbar';
import { useState } from 'react';

function App() {
  const [color,setcolor] = useState('white')
  const [backcolor,setbackcolor] = useState('black')

  return (
    <div style={{backgroundColor:backcolor,color:color}} className='main-container'>
      {/* <h1>Home</h1> */}
      <Navbar color={color} backcolor={backcolor} setcolor={setcolor} setbackcolor={setbackcolor}/>
      <About/>
      <Projects/>
      <Aboutme/>
      <Contact color={color} backcolor={backcolor}/>
      </div>
  )
}

export default App
