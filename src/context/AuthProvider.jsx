import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [sector, setSector] = useState("");

  const signOut = async () => {
    try {
      setIsAuthenticated(false);
      navigate("/signin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  const value = {
    signOut,
    isAuthenticated,
    setIsAuthenticated,
    userEmail,
    setUserEmail,
    sector,
    setSector,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
