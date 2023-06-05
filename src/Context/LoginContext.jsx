import { createContext, useReducer, useState } from "react"
import { useLocation } from "react-router-dom"
export const LoginContext = createContext()

export const LoginContextHandler = ({ children }) => {

    const [ token, setToken ] = useState(false)
    const navigate = useLocation()

    const initialValues = {
        email: "", password: "", isLoggedIn:false
      };
    
      const reducerFun = (state, action) => {
        switch (action.type) {
          case "email":
            return { ...state, email: action.payload };
          case "password":
            return { ...state, password: action.payload }
          default:
            return state;
        }
      };

      const loginHandler = async () => {
        // try {
        //   const user = {
        //     email: state.email,
        //     password: state.password,
        //   };
        //   const res = await fetch("/api/auth/login", {
        //     method: "POST",
        //     body: JSON.stringify(user),
        //   });
    
        //   const result = await res.json();
        //   localStorage.setItem("encodedToken", result.encodedToken);
        //   setToken(localStorage.getItem("encodedToken"))
        // } catch (e) {
        //   dispatch({ type:"login", payload:false })
        //   console.log("error : ",e);
        // }
        setToken(!token)
        navigate(-1)
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
          localStorage.setItem("encodedToken", result.encodedToken);
        } catch (e) {
          console.log("error : ",e);
        }

        console.log(bhaiChech());
        setToken(bhaiChech())
        // console.log("haan",localStorage.getItem("encodedToken"))
      };
      const bhaiChech = () => {
        return localStorage.getItem("encodedToken")?true:false
      }
    






      const [state, dispatch] = useReducer(reducerFun, initialValues);
     
    return <div>
        <LoginContext.Provider value={{ token, testUser, loginHandler, state, dispatch }}>
            { children }
        </LoginContext.Provider>
    </div>
}