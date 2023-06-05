import { useContext } from "react";
import "./loginPage.css";
import { LoginContext } from "../../Context/LoginContext";
import { Link } from "react-router-dom";

const LoginPage = () => {

  const { testUser, loginHandler, dispatch, token } = useContext(LoginContext)

  return (
    <div>
      <div className="loginContainer">
        <h1>Login...</h1>
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
        <button className="signInButton" onClick={loginHandler}>
          { token ?"Sign Out" :"Sign In"}
        </button>
      </div>
      <div>
        <button className="loginButton">Sigh up</button>
        <button className="loginButton" onClick={testUser}>
          Login as Test User
        </button>

        <Link to="/">home</Link>
      </div>
    </div>
  );
};
export default LoginPage;
