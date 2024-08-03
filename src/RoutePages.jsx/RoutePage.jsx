import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';

export default function RoutePage() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/contact' element={<Contact/>}/> */}
        </Routes>
    </Router>
  )
}
