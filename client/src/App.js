import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Task from './pages/Task';

const App = () => {
  return (
    <>
      {/*  PERFORMING THE ROUTING USING REACT-ROUTER-DOM */}
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/task' element={<Task/>} />
      <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App;
