import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Home() {
  return (
    <>
      <Navbar/>  
      <div className="container">
        <h2>Home</h2>
        <Link to="/about" className='btn btn-primary'>About</Link>
      </div>
    </>
  )
}

export default Home