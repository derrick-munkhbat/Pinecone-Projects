import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    email: "",
    isAuthenticated: true,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("login");

    if (user) {
      const email = user.split(":")[0];
      setCurrentUser({
        email,
        isAuthenticated: true,
      });
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
