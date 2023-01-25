/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return ( 
    <>
    <nav className="navbar navbar-expand-lg  sticky-top">
   <h3 className='logo ms-2'>SHION HOUSE</h3>
  <div className="container px-4 text-center">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse m-auto" id="navbarNav">
      <ul className="navbar-nav ms-5">
      <li className="nav-item active">
          <Link className="nav-link" to='home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  " to="shop">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  " to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  " to="blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  <div className="social-links align-items-center d-flex justify-content-between">
   <div className="links">
   <i class="fa-brands fa-facebook-f align-center"></i>
   </div>
   <div className="links">
   <i class="fa-brands fa-twitter"></i>
   </div>
   <div className="links">
   <i class="fa-brands fa-pinterest-p"></i>
   </div>
    </div>
    <div className="search align-items-center d-flex justify-content-between">
    
    </div>
  </div>
</nav>
  
    </>
  )
}
