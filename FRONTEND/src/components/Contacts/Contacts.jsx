import React from 'react'
import Navbar from '../Navbar'
import Contact from '../Contact'

const Contacts = () => {
    return (
        <>
            <div>
                <Navbar />
                <div className='min-h-screen'>
                <Contact/>
                </div>
            </div>
        </>
    )
}

export default Contacts
