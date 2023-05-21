import "./loginPage.css"

const LoginPage = () => {
    return <div>
        <div className="loginContainer">
            <h1>Login...</h1>
            <label className="inputLabel">Email :</label><input type="email" className="loginInput"/>
            <label className="inputLabel">Password :</label><input type="password" className="loginInput"/>
            <button className="signInButton">Sign In</button>
        
        </div>
        <div>
            <button className="loginButton">Sigh up</button>
            <button className="loginButton">Login as Test User</button>
        </div>
    </div>
}
export default LoginPage;
