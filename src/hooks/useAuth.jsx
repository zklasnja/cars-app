import React, { createContext, useContext, useState, useEffect } from "react";
import { authService } from "../services/AuthService";
import { useHistory } from "react-router-dom";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const history = useHistory();
  const [user, setUser] = useState({});

  const handleLogin = async (data) => {
    try {
      const response = await authService.login(data);
      setUser(response.data.user);
      history.push("/cars");
    } catch (error) {}
  };

  const handleLogout = async () => {
    try {
      const response = await authService.logout();
      if (response) {
        localStorage.removeItem("token");
        setUser({});
        history.push("/");
      }
      history.push("/cars");
    } catch (error) {}
  };

  const handleRegister = async (data) => {
    try {
      const response = await authService.register(data);
      setUser(response.data.user);
      history.push("/login");
    } catch (error) {}
  };

  const handleRefreshToken = async () => {
    const token = handleGetItemFromLS("token");
    if (!!token) {
      try {
        const response = await authService.refresh();
        setUser(response.data.user);
      } catch (error) {}
    }
  };

  const handleGetItemFromLS = (value) => {
    return localStorage.getItem(value);
  };

  useEffect(() => {
    handleGetItemFromLS("token");
    handleRefreshToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: user,
        login: handleLogin,
        logout: handleLogout,
        refresh: handleRefreshToken,
        register: handleRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
