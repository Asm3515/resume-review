import React, { useState, useEffect } from "react";
import axios from 'axios';

// Import necessary modules and components

// Import necessary modules and components

const ScheduledAppointments = ({ user }) => {
    const [appointments, setAppointments] = useState([]);
  
    // Function to handle cancellation of an appointment
    const handleCancelAppointment = async (appointmentId) => {
      try {
        // Make a request to the server to delete the appointment
        await axios.delete(`http://localhost:3000/appointment/${appointmentId}`);
        
        // Remove the canceled appointment from the state
        setAppointments((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment._id !== appointmentId)
        );
  
        console.log('Appointment canceled successfully');
      } catch (error) {
        console.error('Error canceling appointment:', error);
      }
    };
  
    useEffect(() => {
      // Check if user email is available
      if (user && user.email) {
        // Fetch appointments for the user
        axios
          .get(`http://localhost:3000/appointment/user/${user.email}`)
          .then((response) => {
            // Set the appointments state with the fetched data
            setAppointments(response.data.appointments);
          })
          .catch((error) => {
            console.error('Error fetching appointments:', error);
          });
      }
    }, [user]); // Make sure to include user in the dependency array
  
    // Render appointments and cancel buttons
  
    return (
      <div>
        <h2>Scheduled Appointments</h2>
        {appointments.map((appointment) => (
          <div key={appointment._id}>
            {/* Display appointment details */}
            <p>Reason: {appointment.reason}</p>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
  
            {/* Add a cancel button */}
            <button onClick={() => handleCancelAppointment(appointment._id)}>
              Cancel Appointment
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default ScheduledAppointments;
  
  