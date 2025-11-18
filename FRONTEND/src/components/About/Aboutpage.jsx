import React from 'react'
import About from '../About'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Aboutpage = () => {
  return (
    <>
            <div>
                <Navbar />
                <br />
                <div className='min-h-screen'>
                <About/>
                 <Footer/>
                </div>
            </div>
        </>
  )
}

export default Aboutpage
