import React, { useState } from 'react'
import axios from 'axios'
import { serverUrl } from '../constants/Constant';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const loginUser = async (e) =>{
        e.preventDefault();
        const {email, password} = data;
        try {
            const {data} = await axios.post(`${serverUrl}/v1/users/login`, {
                email,
                password
            })
            if(data.error){
                toast.error(data.error);
            } else{
                setData({});
                toast.success("Logged in successfully");
                navigate('/dashboard');
            }
        } catch (error) {
            console.log("Error comes from login side", error);            
        }
    }
  return (
    <div className="w-3/4 max-w-xs mx-auto mt-20">
        <form className="bg-white shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4" onSubmit={loginUser}>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
            </div>
            <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline transition-transform duration-500 ease-in-out transform hover:scale-105" type="submit">
                Login
            </button>
            </div>
        </form>
    </div>
  )
}
