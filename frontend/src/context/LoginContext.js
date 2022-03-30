import { createContext, useState } from 'react';

const LoginContext = createContext();

const initialIsLoggedIn = null;

const IsLoggedInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);

  /* const [stateOfLogin, setStateOfLogin] = useState(0); */

  const handleLogin = (e) => {
    if (isLoggedIn) {
      setIsLoggedIn(null);
    } else {
      setIsLoggedIn(true);
    }
  };

  const data = { isLoggedIn, handleLogin };

  return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>;
};

export { IsLoggedInProvider };
export default LoginContext;
