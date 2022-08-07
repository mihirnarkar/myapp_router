import React from 'react'
import {Link} from 'react-router-dom'

function About() {
  return (
    <>
    <div className="container">
      <h2>This is AboutUs</h2>
      <Link to="/contactus" className='btn btn-primary'>ContactUs</Link>
    </div>
    </>
  )
}

export default About