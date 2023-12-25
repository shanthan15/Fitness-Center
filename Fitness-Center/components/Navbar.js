import React from 'react'
import fit2 from "../assets/fit2.jpg"
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
function Navbar() {
  return (
    <div className="navbar">
      <div className="leftside1">
        <img src={fit2}/>
      </div>

      <div className='family'>
      <h1><a href="/" class="logo1">Fitness<span class="orange">Centre</span></a></h1>
      </div>

      <div className='yellow'>
       
        <Link to={"/"}> Home </Link>
        <Link to={"/Workouts"}> Workouts </Link>
        <Link to={"/Plans"}> Plans </Link>
        <Link to={"/About"}> About  </Link>
        <Link to={"/Contact"}>  Contact Us </Link>
        
        
      </div>

</div>

)
}
export default Navbar;