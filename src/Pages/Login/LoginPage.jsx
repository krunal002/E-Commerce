import "./loginPage.css";

const LoginPage = () => {
  const loginHandler = async () => {
    try {
      const creds = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
      };
      const res = await fetch("/api/auth/login", {
        method: "POST",
        // headers: {authorization : "encodedToken"},
        body: JSON.stringify(creds),
      });

      console.log(await res.json());
    } catch (e) {
      console.log("error h bhai", e);
    }

    // try {
    //   const creds = {
    //     email: "adarshbalika@gmail.com",
    //     password: "adarshbalika",
    //   };
    //   const resp = await fetch("/api/auth/login", {
    //     method: "POST",
    //     body: JSON.stringify(creds),
    //   });
    //   const data = await resp.json();
    //   console.log(data.encodedToken);
    //   localStorage.setItem("foundUser", data.encodedToken);
    //   localStorage.setItem("user", data.foundUser.email);
    //   localStorage.setItem("user", data.foundUser.password);
    // } catch (e) {
    //   console.error(e);
    // }
  };

  return (
    <div>
      <div className="loginContainer">
        <h1>Login...</h1>
        <label className="inputLabel">Email :</label>
        <input type="email" className="loginInput" />
        <label className="inputLabel">Password :</label>
        <input type="password" className="loginInput" />
        <button className="signInButton" onClick={loginHandler}>
          Sign In
        </button>
      </div>
      <div>
        <button className="loginButton">Sigh up</button>
        <button className="loginButton">Login as Test User</button>
      </div>
    </div>
  );
};
export default LoginPage;
