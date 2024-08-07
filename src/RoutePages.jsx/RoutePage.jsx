import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Footer from '../Components/HomeComponents/Footer';
import Header from '../Components/HomeComponents/Header';
import Services from '../Pages/Services';
import Blog from '../Pages/Blog';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import NotFound from '../Pages/NotFound';
import OurProducts from '../Pages/OurProducts';
import AdminLoging from '../Pages/AdminLoging';
import CreateBlog from '../Pages/CreateBlog';
import BlogDetails from '../Pages/BlogDetails';

export default function RoutePage() {
  return (
    <Router>
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/service' element={<Services/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/products' element={<OurProducts/>}/>
            <Route path='/admin-login' element={<AdminLoging/>}/>
            <Route path='/create-blog' element={<CreateBlog/>}/>
            <Route path='/blogDetailes/:blogID' element={<BlogDetails/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}
