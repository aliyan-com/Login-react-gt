import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');

  const setUser = (name) => {
    setUsername(name);
  };

  return (
    <UserContext.Provider value={{ username, setUsername: setUser }}>
      {children}
    </UserContext.Provider>
  );
};