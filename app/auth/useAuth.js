import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";
import jwtDecode from "jwt-decode";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (authToken) => {
    const user = jwtDecode(authToken.token);
    setUser(user);
    authStorage.storeToken(authToken.token);
  };

  const logout = () => {
    authStorage.removeToken();
    setUser(null);
  };

  return { user, logout, login };
};
