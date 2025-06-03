import { useState } from 'react';
import {Home} from './pages/home/Home.jsx';
import {Login} from './pages/login/Login.jsx';
import {SignUp} from './pages/signup/SignUp.jsx';

import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
   <div className="p-4 h-screen items-center justify-center">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    </Routes>
   </div>
  )
}

export default App
