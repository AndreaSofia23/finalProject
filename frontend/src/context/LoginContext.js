import { createContext, useState } from 'react';

const LoginContext = createContext();

const IsLoggedInProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

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
