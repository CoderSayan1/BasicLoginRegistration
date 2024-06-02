import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../context/UserContext'
import axios from 'axios'
import Dashboard from './components/Dashboard'

axios.defaults.withCredentials = true;  // very important thing

function App() {

  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position='bottom-center' toastOptions={{duration: 3000}}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App
