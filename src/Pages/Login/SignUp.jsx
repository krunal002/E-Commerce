import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate()
  const reducerFun = ( state, action ) => {
    switch(action.type){
      case "firstName" : return { ...state, firstName:action.payload}
      case "lastName" : return { ...state, lastName:action.payload}
      case "email" : return { ...state, email:action.payload}
      case "password" : return { ...state, password:action.payload}
      default : return state;
    }
  }
  const [ state, dispatch ] = useReducer( reducerFun, {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
  })


  const signUpData = async () => {
    
    try{
      const res = await fetch("/api/auth/signup",{
        method:"POST",
        body: JSON.stringify(state)
      })
      console.log(await res.json())
    } catch(e){ console.log(e) }

    navigate("/login")
  }

  const check = state.firstName.length>0 && state.lastName.length>0 && state.email.length>0 && state.password.length>0;

  return (
    <>
      <div className="loginContainer">
        <h1>Sign Up...</h1>
        <label className="inputLabel">First Name :</label>
        <input
          type="text"
          className="loginInput"
          onChange={(e) =>
            dispatch({ type: "firstName", payload: `${e.target.value}` })
          }
        />
        <label className="inputLabel">Last Name :</label>
        <input
          type="text"
          className="loginInput"
          onChange={(e) =>
            dispatch({ type: "lastName", payload: `${e.target.value}` })
          }
        />
        <label className="inputLabel">Email :</label>
        <input
          type="email"
          className="loginInput"
          onChange={(e) =>
            dispatch({ type: "email", payload: `${e.target.value}` })
          }
        />
        <label className="inputLabel">Password :</label>
        <input
          type="password"
          className="loginInput"
          onChange={(e) =>
            dispatch({ type: "password", payload: `${e.target.value}` })
          }
        />
        <button className="signInButton" onClick={signUpData} disabled={!check}>
          Sign Up
        </button>
      </div>
    </>
  );
};
export default SignUp