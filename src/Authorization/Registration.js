import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import styles from "../Css/styles.module.css";

const Registration = () => {
  const navigate = useNavigate()
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
  };

  const handleFormSubmit = useCallback(async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/user/signup",
        formData
      );
      console.log(response.data);
      alert("User Registered Successfully");
      // You can navigate to the login page or any other page after successful registration
      // Example:
      navigate("/landing-page")
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

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleFormSubmit}>
            <h1>Create an Account</h1>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={styles.input}
            />
            <button type="submit" className={styles.green_btn}>
              Sign Up
            </button>
            
          </form>
        </div>
        <div className={styles.right}>
          <h1>Already have an account</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              LogIn
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
