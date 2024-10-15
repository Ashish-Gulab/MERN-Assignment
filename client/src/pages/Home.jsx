import React, {useEffect, useState} from 'react';
import Layout from '../Layout/Layout';
import '../pagesStyle/home.css';
import { NavLink } from 'react-router-dom';

// HOMEPAGE
const Home=()=>{

    return(
        <Layout title={'Home Page'}>
            <header className='home-header'>
                <div className='header-content'>
                    <h2>'MERN DEVEPLOPER'</h2>
                    <div className='line'></div>
                    <h1>Developed By Ashish Gulab</h1>
                    <button>
                        <NavLink to='http://www.linkedin.com/in/ashish-gulab2905' target='_blank' className='home-ctn'>Learn More</NavLink>
                    </button>
                </div>
            </header>
        </Layout>
    );
};

export default Home;