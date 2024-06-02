import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'


export default function Dashboard() {
    const {user} = useContext(UserContext);
    
  return (
    <div className='flex items-center justify-center h-[90vh]'>  
      {
        !!user && (
          <h1 className='capitalize text-white text-3xl font-semibold text-center rounded-tl-2xl rounded-br-2xl shadow-2xl px-4 py-8 bg-[#1D4350] transition-transform duration-500 ease-in-out transform hover:scale-105'>Hey, {user.name}. <span className='bg-[#8E0E00] rounded-lg px-1'>Welcome to your dashboard</span></h1>
        )
      }
    </div>
  )
}
