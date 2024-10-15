import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Helmet} from "react-helmet";
import {Toaster} from 'react-hot-toast';

// CREATING THE LAYOUT OF THE APPLICATION
const Layout = ({children, title, description, keywords, author}) => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8'/>
        <div>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
        </div>
        <title>{title}</title>
      </Helmet>
      <Header/>
      <main>
        <Toaster/>
        {children}
      </main>
      <Footer/>
    </>
  )
}

// TAKIGN THE DEFAULT PROPS FOR MAKING IT SEO FRIENDLY 
Layout.defaultProps={
  title:'Task Management',
  description:'MERN Project Assignment',
  keywords:'MERN, React Js, Node Js, MongoDB, Express Js',
  author:'Ashish Gulab'
}

export default Layout;
