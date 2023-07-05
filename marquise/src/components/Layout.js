import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from "react-router-dom";
import { UserProvider } from '../pages/UserContext';




function Layout() {
  
  return (
    
    <UserProvider>
    <div className="feed-page-app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  </UserProvider>
  );
};

export default Layout;