import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Logo from '../Images/Logo.png'
import '../Css/Main.css'
import axios from 'axios';
     

const paths = {
  Home: "/",
};



const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const formData = {
    First_name: firstName,
    Last_name: lastName,
    email: email,
    password: password,
    Phone_number: phoneNo    
    
    // confirmPassword,
  };

  const onHaveAnAccoutSignClick = useCallback(() => {
    // Please sync "Desktop - 8" to the project
  }, []);

  const handleFormSubmit = useCallback(async (event) => {
    event.preventDefault();
        try {
          const response = await axios.post(
            "http://localhost:3000/user/signup",
            formData
          );
          console.log(response.data);
          alert("User Registered Sucessfully");
          //  navigate("/login");
        } catch (error) {
          console.error("Signup Error:", error);
        }

    // Clear form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNo("");
    setPassword("");
    setConfirmPassword("");
  }, [formData]);

  const onHOMETextClick = useCallback(() => {
    // Please sync "Desktop - 1" to the project
  }, []);

  return (
    <div className="desktop-4">
      <b className="seet-lab"> SEET LAB</b>
      <Link to={paths.Home} className="home" onClick={onHOMETextClick}>
        HOME
      </Link>
      <div className="Header-container">
        <p className="Header">
          <b>Dr. Venkata Inukollu</b>
        </p>
        <p className="blank-line">&nbsp;</p>
        <p className="blank-line">Assistant Professor</p>
        <p className="blank-line">Department of Computer Science</p>
        <p className="blank-line">Purdue University Fort Wayne</p>
      </div>
      <img className="image-2-icon" alt="" src="" />
      <img className="desktop-4-child" alt="" src="/line-1.svg" />
      <b className="Name-tag">Industry Collaboration :</b>
      <div className="desktop-4-item">
        <form className="registration-form" onSubmit={handleFormSubmit}>
          <div className="sign-up">Sign Up</div>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="string"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNo">Phone No:</label>
            <input
              type="text"
              id="phoneNo"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="register">Register</button>
        </form>
      </div>
      <b className="sweet-water-fortwayne-container">
        <p className="sweet-water-fortwayne">&nbsp;</p>
        <p className="sweet-water-fortwayne"></p>
        <p className="sweet-water-fortwayne">&nbsp;</p>
        <p className="sweet-water-fortwayne">&nbsp;</p>
      </b>
    </div>
  );
};

export default Registration;