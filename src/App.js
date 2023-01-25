import './App.css';
import React from 'react'
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import { Route,Routes } from 'react-router-dom';
import Home from './Component/Home';
import Shop from './Component/Shop';
import About from './Component/About';
import Blog from './Component/Blog';
import Contact from './Component/Contact';
export default function App() {
  return ( <>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Home />} />
  <Route path='home' element={<Home />} />
  <Route path='shop' element={<Shop />} />
  <Route path='about' element={<About />} />
  <Route path='blog' element={<Blog />} />
  <Route path='contact' element={<Contact />}/>
  </Routes>
  <Footer/>
  </>
  )
}

