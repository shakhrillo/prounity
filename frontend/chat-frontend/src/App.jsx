import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login'
import Verify from './pages/Verify'
import Navbar from './pages/Navbar'
import 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
   <div>
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route path='/login' element={<Login/>}/>
        <Route path='/verify-sms' element={<Verify/>}/>
      </Route>
    </Routes>
   </div>
  )
}

export default App
