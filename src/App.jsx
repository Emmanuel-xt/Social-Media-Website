import { useState } from 'react'
import React from 'react'
import './App.css'
import Home from './pages/home/Home'
import Topbar from './components/topbar/Topbar'
import Profile from './pages/profile/Profile'
import { Route ,Routes } from 'react-router'

function App() {

  return (
    <>
   <Topbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/profile' element={<Profile />} />
   </Routes>      
    </>
  )
}

export default App
