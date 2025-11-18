import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null
      })

      localStorage.removeItem("Users");
      toast.success("Logout Successfully");

      setTimeout(() => {
        window.location.reload();
         navigate("/", { replace: true });

      }, 1000)
    } catch (error) {
      toast.error("Error : " + error);
      setTimeout(() => { }, 3000);
    }
  }

  return (
    <div>
      <button className='btn px-2 py-1 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
