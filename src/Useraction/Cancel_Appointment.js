import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../Images/Logo.png';
import '../Css/Project.css';

const paths = {
  Home: "/",
};

const Cancel_Appointment = () => {

  const [appointments, setAppointments] = useState([]);


  const fetchAppointments = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3000/appointment");
      const data = await response.json();
      setAppointments(data.appointment); // Update this line
      console.log(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  }, []);

  useEffect(() => {
    fetchAppointments();
  }, [ fetchAppointments]);

  const onHOMETextClick = useCallback(() => {
    // Please sync "Desktop - 1" to the project
  }, []);

  const handleRetrieveAppointments = () => {
    fetchAppointments();
  };

  const handleCancelAppointment = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/appointment/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log(`Appointment with id ${id} canceled successfully`);
        // Refresh the list of appointments after cancellation
        fetchAppointments();
      } else {
        console.log(`Failed to cancel appointment with id ${id}`);
      }
    } catch (error) {
      console.error("Error canceling appointment:", error);
    }
  };

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
      <img className="image-2-icon" alt="" src={Logo} />
      <img className="desktop-4-child" alt="" src="/line-1.svg" />
      <b className="Name-tag">Course Contents:</b>
      <div className="desktop-4-item">
        <div className="cancel_app">
        <button onClick={handleRetrieveAppointments}>Retrieve Appointments</button>
        {appointments && appointments.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Appointment Reason</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{appointment.reason}</td>
                  <td>{appointment.name}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>
                    <button onClick={() => handleCancelAppointment(appointment._id)}>Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No appointments found.</p>
        )}
        </div>
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

export default Cancel_Appointment;
