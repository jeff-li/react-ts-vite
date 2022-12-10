
import { useState, createContext } from 'react';

export type User = {
  name: string
}

interface AuthContextType {
  user?: User;
  signin: (email: string, password: string) => Promise<void>;
  signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>();

  const signin = async (email: string, password: string): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log(email, password)
    setUser({ name: 'Hello World' });
  };

  const signout = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    setUser(undefined);
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
