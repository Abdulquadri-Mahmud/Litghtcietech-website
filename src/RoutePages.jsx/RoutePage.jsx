import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Footer from '../Components/HomeComponents/Footer';
import Header from '../Components/HomeComponents/Header';

export default function RoutePage() {
  return (
    <Router>
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/contact' element={<Contact/>}/> */}
        </Routes>
        <Footer/>
    </Router>
  )
}
