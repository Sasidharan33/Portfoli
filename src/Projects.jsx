import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import l1 from './images/car-logo.jpg'
import l2 from './images/crud.jpeg'
import l3 from './images/formvalid.jpeg'
function Projects() {
  return (
    <div className='project-main'>
      <h1>Things I Have Designed For Web Development</h1>
      <OwlCarousel className='owl-theme' loop autoPlay={true} items={1} margin={10} nav>
    <div class='item'>
        <div className='item-con'>
          <h3 className='color-span'>Car Serv</h3>
          <ul>
            <li>Developed a full-stack car servicing 
              web application using React and Node.js, featuring 
              user authentication, appointment scheduling, 
              and real-time notifications.
              </li>
              <li>
              Implemented backend APIs and services using Node.js and Express.js,
               supporting data retrieval and manipulation for client-side applications.
              </li>
              <li>
              Designed and optimized database schemas and queries using MongoDB, ensuring efficient data storage and retrieval.
              </li>
              <li><a href="">Frontend</a></li>
              <li><a href="">Backend</a></li>
              <li><a href="">Preview</a></li>
          </ul>
        </div>
        <div className='item-img'>
          <img src={l1} alt="" />
        </div>
    </div>
    <div class='item'>
    <div className='item-con'>
          <h3 className='color-span'>CRUD APP</h3>
          <ul>
            <li>
            CRUD app is used for create, read, update and delete elements in it
              </li>
              <li>
              CRUD is an acronym that comes from the world of 
              computer programming and refers to the four functions that are considered 
              necessary to implement a persistent storage application: create, read, update and delete.
              </li>
              <li>
              Designed and optimized database schemas and queries using MongoDB, ensuring efficient data storage and retrieval.
              </li>
              <li><a href="">Frontend</a></li>
              <li><a href="">Backend</a></li>
              <li><a href="">Preview</a></li>
          </ul>
        </div>
        <div className='item-img'>
          <img src={l2} alt="" />
        </div>
    </div>
    <div class='item'>
    <div className='item-con'>
          <h3 className='color-span'>Form Validation</h3>
          <ul>
            <li>
            Developed a dynamic registration form using React with form
            validation to ensure accurate user input.
              </li>
              <li>
              Implemented client-side validation using Formik,
              Yup libraries to check and enforce input patterns.
              </li>
              <li>
              Designed a responsive form interface using Html,Css
              </li>
              <li><a href="">Frontend</a></li>
              <li><a href="">Backend</a></li>
              <li><a href="">Preview</a></li>
          </ul>
        </div>
        <div className='item-img'>
          <img src={l3} alt="" />
        </div>

    </div>
</OwlCarousel>
    </div>
  )
}

export default Projects
