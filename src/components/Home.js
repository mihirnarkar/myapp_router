import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
    <div className="container">
        <h2>Home</h2>
        <Link to="/about" className='btn btn-primary'>About</Link>
    </div>
    </>
  )
}

export default Home