import React, { useState } from 'react';
import '../pagesStyle/registerStyle.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Layout from '../Layout/Layout';

//REGISTER THE USER
const Register = () => {

  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [phone, setPhone]= useState("");
  const [address, setAddress]= useState("");
  const navigate = useNavigate();
  
  // CALLING USER REGISTER API
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(name, email, password, phone, address);
    window.alert("Register Successfully");
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setAddress("");
    try {
      const res= await axios.post('/api/v1/auth/register', {name, email, password, phone, address});
      if(res && res.data.success)
      {
        toast.success(res.data.message);
        navigate("/login");
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
    <Layout title={'Register Page'}>
      <div className='register-main'>
        <form onSubmit={handleSubmit}>
          <div className='register'>
            <h1>Register Yourself</h1>
            <div className='register-inputs'>
              <input type="text" name='name' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Your Name' required/>
              <input type="email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Your Email' required/>
              <input type="password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Your Password' required/>
              <input type="text" name='phone' value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder='Enter Your Phone Number' required/>
              <input type="text" name='address' value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder='Enter Your Address' required/>
              <input type="submit" name='submit' className='submit-button' value="Register" required/>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Register;