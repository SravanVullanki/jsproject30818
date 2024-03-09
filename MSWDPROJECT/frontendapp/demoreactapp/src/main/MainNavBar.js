import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import './style.css'
import JobSeekerLogin from './../jobseeker/JobSeekerLogin';
import Registration from './../jobseeker/Registration';
import Contact from './Contact';
import AdminLogin from './../admin/AdminLogin';

export default function MainNavBar() 
{
  return (
    <div>
       
       <nav>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/registration">Registration</Link>
            <Link to="/jobseekerlogin">Job Seeker Login</Link>
            <Link to="/adminlogin">Admin Login</Link>
            <Link to="/contact">Contact</Link>
        </ul>
        </nav>


     <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/registration" element={<Registration/>} exact/>
        <Route path="/jobseekerlogin" element={<JobSeekerLogin/>} exact/>
        <Route path="/contact" element={<Contact/>} exact/>
        <Route path="/adminlogin" element={<AdminLogin/>} exact/>
     </Routes>

    </div>
  )
}

