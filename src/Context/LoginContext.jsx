import { createContext, useReducer, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
export const LoginContext = createContext();

export const LoginContextHandler = ({ children }) => {
  const notify = () => toast("Logged In!");
  const [token, setToken] = useState(false);
  const [currUser, setCurrUser] = useState({});

  const navigate = useNavigate();
  const location = useLocation();

  const initialValues = {
    email: "",
    password: "",
    isLoggedIn: false,
  };

  const reducerFun = (state, action) => {
    switch (action.type) {
      case "email":
        return { ...state, email: action.payload };
      case "password":
        return { ...state, password: action.payload };
      default:
        return state;
    }
  };

  const loginHandler = async () => {
    try {
      const user = {
        email: state.email,
        password: state.password,
      };

      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(user),
      });

      const result = await res.json();
      setCurrUser(result.foundUser);
      setToken(result.encodedToken);
      localStorage.setItem("encodedToken", result.encodedToken);
      localStorage.setItem("user", JSON.stringify(result.foundUser));
      notify();
    } catch (e) {
      console.log("error : ", e);
    }
    navigate(location?.state?.from?.pathname);
  };

  const testUser = async () => {
    try {
      const user = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
      };

      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(user),
      });

      const result = await res.json();
      setCurrUser(result.foundUser);
      setToken(result.encodedToken);
      localStorage.setItem("encodedToken", result.encodedToken);
      localStorage.setItem("user", JSON.stringify(result.foundUser));
      navigate(location?.state?.from?.pathname);
      notify();

      console.log("Result : ", result);
    } catch (e) {
      console.log("Test user login error : ", e);
    }
  };

  const [state, dispatch] = useReducer(reducerFun, initialValues);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("encodedToken");
    localStorage.removeItem("user");
  };

  return (
    <div>
      <LoginContext.Provider
        value={{
          token,
          testUser,
          loginHandler,
          state,
          dispatch,
          currUser,
          logout,
        }}
      >
        {children}
      </LoginContext.Provider>
    </div>
  );
};
