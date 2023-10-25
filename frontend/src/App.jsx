import { useState } from 'react'
import reactLogo from './assets/icons/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Login from './views/login/Login'
import './App.scss'
import Register from './views/register/Register'
import Navbar from './views/navbar/Navbar'
import ForgotPassword from './views/forgot-password/ForgotPassword'
import SmsVerify from './views/sms-verify/SmsVerify'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/sms-verify" element={<SmsVerify />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
