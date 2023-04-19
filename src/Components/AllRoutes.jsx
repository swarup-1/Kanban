import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from '../Pages/Dashboard'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes