import React from 'react'
import {Link} from 'react-router-dom'

function ContactUs() {
    return (
        <>
            <div className="container">
                <h2>This is ContactUs page</h2>
                <Link to="/" className='btn btn-primary'> Home </Link>
            </div>
        </>
    )
}

export default ContactUs