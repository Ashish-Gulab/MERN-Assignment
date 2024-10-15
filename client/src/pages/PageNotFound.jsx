import React from 'react';
import {NavLink} from 'react-router-dom';
import Layout from '../Layout/Layout';

// PAGE NOT FOUND -- IF THERE THE ENTERED ROUTE DOES NOT MATCH THEN IT WILL RENDER
const PageNotFound = () => {
  return (
    <Layout title={'Page Not Found'}>
      <div id='not-found'>
        <div className='not-found'>
          <div className='not-found-404'>
            <h1>404</h1>
          </div>
          <h2>we are sorry, page not Found</h2>
          <p className='mb-5'>The page you are looking for might have been removed from here or is not available.</p>

          <NavLink to={'/'}>Back to homepage</NavLink>
        </div>
      </div>
    </Layout>
  )
}

export default PageNotFound;
