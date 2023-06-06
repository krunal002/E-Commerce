import { createContext, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export const LoginContext = createContext();

export const LoginContextHandler = ({ children }) => {
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
      setCurrUser(result.foundUser)
      localStorage.setItem("encodedToken", result.encodedToken);
      setToken(localStorage.getItem("encodedToken"))
    } catch (e) {
      console.log("error : ",e);
    }
    setToken(tokenResult());
    navigate(location?.state?.from?.pathname)
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
      setCurrUser(result.foundUser)
      localStorage.setItem("encodedToken", result.encodedToken);
    } catch (e) {
      console.log("error : ", e);
    }

    setToken(tokenResult());
    navigate(location?.state?.from?.pathname)
  };

  const tokenResult = () => {
    return localStorage.getItem("encodedToken")==="undefined" ? false : true;
  };

  const [state, dispatch] = useReducer(reducerFun, initialValues);

  const logout = () => {
    setToken(false)
  }

  return (
    <div>
      <LoginContext.Provider
        value={{ token, testUser, loginHandler, state, dispatch, currUser, logout }}
      >
        {children}
      </LoginContext.Provider>
    </div>
  );
};
