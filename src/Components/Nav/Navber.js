import React from 'react';
import { Link } from 'react-router-dom';
import './Home/nav.css'

const Navber = () => {
    return (
        <div className="navbar px-14 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/appoint'>Appointment</Link></li>
      <li><Link to='/Reviews'>Reviews</Link></li>
      <li><Link to='/contact'>contact us</Link></li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-3xl">Doctors Portal</Link>
  </div>

  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal text-lg font-medium p-0 coustom-css">
     
      
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/appoint'>Appointment</Link></li>
      <li><Link to='/Reviews'>Reviews</Link></li>
      <li><Link to='/contact'>contact us</Link></li>
      <li><Link to='/login'>Login</Link></li>
    </ul>
  </div>
  
</div>
    );
};

export default Navber;