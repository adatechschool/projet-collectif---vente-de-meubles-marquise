import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const updateUser = (data) => {
    setUserData(data);
  };
  
//   const loginUser = (user) => {
//     setUserData(user);
//   };
  const logoutUser = () => {
    setUserData(null);
  };

  return (
    <UserContext.Provider value={{ userData,updateUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };

