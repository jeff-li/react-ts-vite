import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw 'useAuth must be used inside AuthContext'
  return ctx
}

export default useAuth;
