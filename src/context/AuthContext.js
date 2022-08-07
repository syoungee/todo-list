import React from "react";
// local storage에 로그인 정보 저장

const defaultContext = {
  isLoggedIn: false,
  setLogin: () => {},
  setLogout: () => {},
};
const AuthContext = React.createContext(defaultContext);

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(!!localStorage.getItem("isLoggedIn"));

  const setLogin = () => {
    console.log("setLogin");
    window.localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
  };

  const setLogout = () => {
    window.localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(null);
  };

  const value = { isLoggedIn, setLogin, setLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthState = () => {
  return React.useContext(AuthContext);
};

export { AuthContextProvider, AuthContext };
