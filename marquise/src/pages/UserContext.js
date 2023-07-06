//Permet de partager des données entre plusieurs composants, sans avoir besoin de les transmettre explicitement via les props.
import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [showFormErrorMessage, setShowFormErrorMessage] = useState(false);

  useEffect(() => {
    console.log("Valeur de userData :", userData);
  }, [userData]);

  const updateUser = (data) => {
    setUserData(data);
  };

  const logoutUser = () => {
    setUserData(null);
  };

  const resetFormErrorMessage = () => {
    setShowFormErrorMessage(false);
  };

  return (
    <UserContext.Provider value={{ userData, updateUser, logoutUser,showFormErrorMessage, resetFormErrorMessage,setShowFormErrorMessage}}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
