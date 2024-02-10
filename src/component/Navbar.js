import React, { useState } from 'react'
// import './Navbar.css';
import './Navbar.css'


export default function Navbar() {
    
  return (
   
    <div className='Navbar'>
        <div className="nav-logo">

        <a href=""><i className="fa a" aria-hidden="true"></i>
       
        </a>
        <p>StateSummary</p>
        </div>
    

        <a href="">home</a>
        <a href="">about</a>
        <a href="">state</a>
       
    </div>
  )
}
