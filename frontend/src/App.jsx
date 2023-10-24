import { useState } from 'react'
import './App.scss'
import Profile from './views/Profile/Profile'
import EditProfile from './views/Profile/EditProfile'
import DeleteProfile from './views/Profile/DeleteProfile'

import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/profile-user' element={<Profile/>}/> 
        <Route path='/edit-profile' element={<EditProfile/>}/> 
        <Route path='/delete-profile' element={<DeleteProfile/>}/> 
      </Routes>
    </div>
    
  )
}

export default App
