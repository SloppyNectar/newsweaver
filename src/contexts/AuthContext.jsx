import React, { createContext, useContext, useState, useEffect } from 'react';
import { setAuthToken, login as apiLogin, signup as apiSignup } from '../lib/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
      setAuthToken(token);
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const { user, token } = await apiLogin(credentials);
      setUser(user);
      setAuthToken(token);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
    } catch (error) {
      throw error;
    }
  };

  const signup = async (userData) => {
    try {
      const { user, token } = await apiSignup(userData);
      setUser(user);
      setAuthToken(token);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setAuthToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
