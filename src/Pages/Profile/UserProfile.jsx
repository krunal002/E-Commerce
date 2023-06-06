import { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";
import Header from "../../Component/Header/Header";

const UserProfile = () => {
    const { currUser } = useContext(LoginContext)
    console.log( currUser );

    const { firstName, lastName, email } = currUser;
    return <div>
        <Header />
        <p><b>First Name : </b> {firstName}</p>
        <p><b>Last Name : </b> {lastName}</p>
        <p><b>Email : </b> {email}</p>
    </div>
}
export default UserProfile;

