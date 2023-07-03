import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className='feed-page-app'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;