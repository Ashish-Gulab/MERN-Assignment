import React from 'react';
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/auth';

// FOOTER OF THE PAGE
const Footer = () => {

  const [auth, setAuth]= useAuth();

  // APPLICATION LOGOUT FUNCTIONALITY
  const handleLogout = () =>{
    setAuth({
      ...auth, user:null, token:''
    });
    localStorage.removeItem('auth');
    toast.success('Logout Successfully');
  }

  return (
    <>
    <div  className='footer'>
      <div className='footer_heading'>All Rights are Reserved &copy;</div>
      <div>
        <ul>
          <li><NavLink to={'/'}>Home</NavLink></li> |
          {
              !auth.user ? (
                <>
                  <li><NavLink to={'/register'}>Register</NavLink></li> |
                  <li><NavLink to={'/login'}>Login</NavLink></li>
                </>
              ) : (
                <>
                <li><NavLink onClick={handleLogout} to={'/login'}>Logout</NavLink></li>
                </>
              )
            }
        </ul>
        </div>
    </div>
    </>
  )
}

export default Footer;
