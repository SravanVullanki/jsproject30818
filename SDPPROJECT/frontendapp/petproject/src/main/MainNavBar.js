import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './style.css';
import Registration from './../customer/Registration';
import Contact from './Contact';
import AdminLogin from './../admin/AdminLogin';
import CustomerLogin from './../customer/CustomerLogin';

export default function MainNavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/registration">Registration</Link></li>
          {/* <li><Link to="/customerlogin">Customer Login</Link></li>
          <li><Link to="/adminlogin">Admin Login</Link></li> */}
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/registration" element={<Registration />} exact />
        <Route path="/customerlogin" element={<CustomerLogin />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/adminlogin" element={<AdminLogin />} exact />
      </Routes>
    </div>
  );
}
