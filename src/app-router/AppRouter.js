
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Dashboard } from '../pages/Dashboard'
import Login from '../pages/Login'
import NewCar from '../pages/NewCar'
import Register from '../pages/Register'



const AppRouter = () => {
  return (
    <div>
     
     <BrowserRouter>
     <Navbar/>
        <Routes> 
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/newcar' element={<NewCar/>}/>  
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>    
        </Routes>
        <Footer/>
     </BrowserRouter>

    </div>
  )
}

export default AppRouter