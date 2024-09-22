import { useState, useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const login = () => {
    setUser("data");
    console.log(user);
  };

  const signup = (e) => {
    setUser(e);
    console.log(user);
    console.log("signed up");
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

// return new Promise((resolve, reject) => {
//   // ..........................Make an API call

//   if (password === user.password) {
//     setUser({ name: username, isAuthenticated: true });
//     resolve("success");
//   } else {
//     reject("incorrect password");
//   }
// });
