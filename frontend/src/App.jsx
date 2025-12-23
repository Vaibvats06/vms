import React from 'react'
import Login from './pages/Login'
import { Routes,Route } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Dashboard from './pages/Dashboard'
import useGetProduct from './hooks/useGetProduct'
import { useSelector } from 'react-redux'

const App = () => {
  useGetProduct();
  
 
  return (
    <div>
      <div><Toaster/></div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App