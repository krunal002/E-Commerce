import { useContext } from "react";
import "./loginPage.css";
import { LoginContext } from "../../Context/LoginContext";
import Header from "../../Component/Header/Header";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()
  const { state, testUser, loginHandler, dispatch, token, logout, currUser } =
    useContext(LoginContext);
  const { firstName, lastName, email } = currUser;

  const check = state.email.length>0 && state.password.length>0;

  return (
    <div>
      <Header />

      {token ? (
        <div>
          <p>
            <b>First Name : </b> {firstName}
          </p>
          <p>
            <b>Last Name : </b> {lastName}
          </p>
          <p>
            <b>Email : </b> {email}
          </p>
          <button className="signInButton" onClick={logout}>Logout</button>
        </div>
      ) : (
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
            <button 
              className="signInButton" 
              onClick={loginHandler}
              disabled={!check}
              >
              Sign In
            </button>
          </div>
          <div>
            <button className="loginButton" onClick={() => navigate("/signup")}>Sigh up</button>
            <button className="loginButton" onClick={testUser}>
              Login as Test User
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default LoginPage;
