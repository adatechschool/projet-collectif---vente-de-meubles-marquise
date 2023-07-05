import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from "react-router-dom";
import { UserContext } from '../pages/UserContext';
import { UserProvider } from '../pages/UserContext';




function Layout() {
  // const [loginState, setLoginState] = useState({ userData: undefined });
  // const updateUserData = (userData) => {
  //   setLoginState({ userData });
  // };
  return (
    // <div className='feed-page-app'>
    //   <Header userData={loginState?.userData}/>
    //   <Outlet updateUserData={updateUserData}/>
    //   <Footer />
    // </div>
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