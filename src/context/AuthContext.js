import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('auth_user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const signup = ({ name, email, password }) => {
    const newUser = { name, email };

    localStorage.setItem(
      'registered_user',
      JSON.stringify({ name, email, password }),
    );
    localStorage.setItem('auth_user', JSON.stringify(newUser));

    setUser(newUser);
  };

  const login = ({ email, password }) => {
    const reg = localStorage.getItem('registered_user');
    if (!reg) throw new Error('No account found. Please sign up first.');

    const parsed = JSON.parse(reg);

    if (parsed.email !== email || parsed.password !== password) {
      throw new Error('Invalid email or password.');
    }

    const loggedInUser = { name: parsed.name, email: parsed.email };
    localStorage.setItem('auth_user', JSON.stringify(loggedInUser));
    setUser(loggedInUser);
  };

  const logout = () => {
    localStorage.removeItem('auth_user');
    setUser(null);
  };

  //  Fix lint warning: stable object reference
  const value = useMemo(() => ({
    user,
    signup,
    login,
    logout,
  }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

