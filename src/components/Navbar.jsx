import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext';
import axios from 'axios';
import { serverUrl } from '../constants/Constant';
import toast from 'react-hot-toast';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate()
  const {user} = useContext(UserContext);
  // console.log(user);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() =>{
    if(user){
      setLoggedIn(true);
    }  
  }, [user]);
  const handleLogout = async () =>{
    try {
      const response = await axios.post(`${serverUrl}/v1/users/logout`);
      // console.log(response);
      if(response.status >= 200 && response.status < 300){
        setLoggedIn(false);
        toast.success("Logout Successfully");
        navigate('/');
      } else{
        toast.error("Logout error");
      }
    } catch (error) {
      console.log("Logout error", error);
    }
  }
  return (
    <div className='bg-[#eacda3]'>
      <nav className='flex justify-around w-3/4 mx-auto py-3 font-bold text-xl '>
        <Link
          to='/'
          className={`hover:bg-[#3f8cad] hover:text-white hover:rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105 ${location.pathname === '/' ? 'bg-[#3f8cad] text-white rounded-lg' : ''}  px-2 py-2 `}
        >
          Home
        </Link>
        {!loggedIn ? (<Link
          to='/login'
          className={`hover:bg-[#3f8cad] hover:text-white hover:rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105 ${location.pathname === '/login' ? 'bg-[#3f8cad] text-white rounded-lg' : ''} px-2 py-2`}
        >
          Login
        </Link>): (
          <button
          onClick={handleLogout}
          className={`hover:bg-[#3f8cad] hover:text-white hover:rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105 px-2 py-2`}
        >
          Logout
        </button>)}
        <Link
          to='/register'
          className={`hover:bg-[#3f8cad] hover:text-white hover:rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105 ${location.pathname === '/register' ? 'bg-[#3f8cad] text-white rounded-lg' : ''} px-2 py-2`}
        >
          Register
        </Link>
      </nav>
    </div>
  )
}


