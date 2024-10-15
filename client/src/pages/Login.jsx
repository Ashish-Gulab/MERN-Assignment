import React, { useState } from 'react';
import '../pagesStyle/loginStyle.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import Layout from '../Layout/Layout';

//LOGIN PAGE
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // LOGIN API CALLING
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res= await axios.post('/api/v1/auth/login', {email, password});
      if(res && res.data.success)
      {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        });

        // STORING THE DATA INTO LOCAL STORAGE FOR KEEPING IT ON THE PAGE
        localStorage.setItem('auth', JSON.stringify(res.data));
        navigate(location.state || "/");
      }
      else 
      {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  return (
    <Layout title={'Login Page'}>
      <div className='login-main'>
        <form onSubmit={handleSubmit}>
          <div className='login'>
            <h1>Login In</h1>
            <div className='login-inputs'>
              <input type="email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Your Email' required/>
              <input type="password" name='password' value={password} onChange={(e=>{setPassword(e.target.value)})} placeholder='Enter Your Password' required/>
              <input type="submit" name='submit' className='submit-button' value="Login" required/>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Login;

