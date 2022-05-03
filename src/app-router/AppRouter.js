
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Dashboard } from '../pages/Dashboard'
import NewCar from '../pages/NewCar'



const AppRouter = () => {
  return (
    <div>
     
     <BrowserRouter>
     <Navbar/>
        <Routes> 
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/newcar' element={<NewCar/>}/>  
                  
        </Routes>
     </BrowserRouter>

    </div>
  )
}

export default AppRouter