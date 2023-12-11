import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import axios from 'axios';
import ScheduledAppointments from "./ScheduleAppointment";

const Schedule_Appointment = () => {
  const [formData, setFormData] = useState({
    reason: "",
    date: "",
    time: "",
  });

  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  const handleChange = ({ currentTarget: input }) => {
    setFormData({ ...formData, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use the appropriate endpoint for scheduling appointments
      const response = await axios.post(
        "http://localhost:3000/appointment/create",
        {
          name: user.First_name + user.Last_name,
          email: user.email,
          phone: user.Phone_number,
          ...formData, // Include user ID in the appointment data
        }
      );

      // Handle the response as needed
      console.log(response.data);
    } catch (error) {
      console.error("Appointment Scheduling Error:", error.message);
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Schedule an Appointment</h1>
            <p>Hello {user.First_name} {user.Last_name}!</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.Phone_number}</p>
            <input
              type="text"
              placeholder="Reason for Appointment"
              name="reason"
              onChange={handleChange}
              value={formData.reason}
              required
              className={styles.input}
            />
            <input
              type="date"
              placeholder="Date"
              name="date"
              onChange={handleChange}
              value={formData.date}
              required
              className={styles.input}
            />
            <input
              type="time"
              placeholder="Time"
              name="time"
              onChange={handleChange}
              value={formData.time}
              required
              className={styles.input}
            />
            <button type="submit" className={styles.green_btn}>
              Schedule Appointment
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>Scheduled Appointments</h1>
          <div className={styles.appointments_list}>
            <ScheduledAppointments user={user} />
          </div>
          <Link to="/landing-page">
            <button className={styles.white_btn}>Back to Landing Page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Schedule_Appointment;
