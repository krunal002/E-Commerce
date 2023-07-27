import "./Profile.css"
import { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";
import Header from "../../Component/Header/Header";

const UserProfile = () => {
  const { currUser } = useContext(LoginContext);
  const { firstName, lastName, email } = currUser;

  return (
    <div>
      <Header />
      <div className="profile-container">
        <img
          src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
          alt="usserImage"
          className="profile-picture"
        />
        <p>
          <b>First Name : </b> {firstName}
        </p>
        <p>
          <b>Last Name : </b> {lastName}
        </p>
        <p>
          <b>Email : </b> {email}
        </p>
      </div>
    </div>
  );
};
export default UserProfile;
