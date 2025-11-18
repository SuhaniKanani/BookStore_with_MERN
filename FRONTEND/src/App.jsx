import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './HomePage/Home'
import Courses from './components/CoursePage/Courses'
import Contacts from './components/Contacts/Contacts'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider'
import Aboutpage from './components/About/Aboutpage'

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={authUser ? <Courses /> : <Navigate to="/" />} />
 
          <Route path='/contact'  element={authUser ? <Contacts /> : <Navigate to="/" />} />
        <Route path='/about' element={authUser ? <Aboutpage /> : <Navigate to="/" />} />

        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App
