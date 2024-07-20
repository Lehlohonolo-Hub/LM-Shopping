import React from 'react'

import { Link } from 'react-router-dom'
import './about.css';

const About = () => {
  return (
    <>
    <div className='about-page'>
        <div className='about-content'>
            <div className='about-header'>
              <h1>GETTING</h1>
              <h3>TO KNOW US</h3>
          </div>
          <div className='description'>
              <p>Who are we? What makes us tick? Welcome to the world of LM-shopping.com where extraordinary people come together to do extraordinary things, bringing world-class online shopping to the people globally.</p>
          </div>
          <Link to='/' className='link'> Learn More about our journey ➜ </Link>
          
        </div>
    </div>
    
    </>
  )
}

export default About