import React, { useState } from 'react';
import {NavLink, Link} from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/auth';
// import Task from '../pages/Task';

// CREATIGN THE HEADER 
const Header = () => {

  const [menuOpen, setMenuOpen]=useState(false);
  const [auth, setAuth]= useAuth();

  const handleLogout = () =>{
    setAuth({
      ...auth, user:null, token:''
    });
    localStorage.removeItem('auth');
    toast.success('Logout Successfully');
  }

  return (
    <>
     <div className='main-nav'>
        <nav>
          <div className='web_name_menu'><Link to={'/'} className="title">MERN Assignment</Link>
          <div className='icon_three_responsive'><i className='fas fa-bars' onClick={(e)=>{setMenuOpen(!menuOpen);}}></i></div>
          </div>
          <ul className={menuOpen ? "open": ""}>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/task'}>Tasks</NavLink></li>
            {
              !auth.user ? (
                <>
                  <li><NavLink to={'/register'}>Register</NavLink></li>
                  <li><NavLink to={'/login'}>Login</NavLink></li>
                </>
              ) : (
                <>
                <li><NavLink onClick={handleLogout} to={'/login'}>Logout</NavLink></li>
                </>
              )
            }
          </ul>
        </nav> 
      </div>
    </>
  )
}

export default Header;
