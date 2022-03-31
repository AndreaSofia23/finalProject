import axios from 'axios';
import { createContext, useState } from 'react';

const LoginContext = createContext();

const IsLoggedInProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  axios.defaults.headers.common['Authorization'] = JSON.parse(window.localStorage.getItem('token'));
 
  const data = {
    isLoggedIn,
    user,
    token,
    setUser,
    setToken,
    setIsLoggedIn,
  };

  return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>;
};

export { IsLoggedInProvider };
export default LoginContext;
