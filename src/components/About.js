import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'

function About() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <h2>This is AboutUs</h2>
      <Link to="/contact" className='btn btn-primary'>ContactUs</Link>
    </div>
    </>
  )
}

export default About