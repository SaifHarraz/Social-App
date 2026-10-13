import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}
interface AuthProviderType{
    token: string | null;
    saveUserToken: (token: string) => void;
    isAuthenticated: boolean
    removeUserToken:()=>void
  
}  
const AuthContext = createContext<AuthProviderType| null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string |  null>(()=>localStorage.getItem("user_token"));  //lazy initialization
  const isAuthenticated = Boolean(token);  //state derived handler  to be used for ui updates
  function saveUserToken(token: string) {
    setToken(token);
    localStorage.setItem("user_token", token);
  }
  function removeUserToken() {
    setToken(null);
    localStorage.removeItem("user_token");
  }
  console.log("AuthProvider",token);
  
  return (
    <AuthContext.Provider value={{ token, saveUserToken,removeUserToken,isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
 
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useToken must be used within a AuthProvider");
  }
  return context;
}
