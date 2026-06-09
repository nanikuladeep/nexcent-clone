import { createContext, useContext, useState } from "react";

interface AuthType {
  user: any;
  login: (user: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthType | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  const login = (userData: any) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;