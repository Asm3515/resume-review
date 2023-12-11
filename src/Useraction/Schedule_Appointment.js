import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../Images/Logo.png'
import '../Css/Project.css'

const paths = {
  Home: "/",
};

const Schedule_Appointment = () => {
  const [formData, setFormData] = useState({
    reason: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const [message, setMessage] = useState("");
  const [isAppointmentScheduled, setIsAppointmentScheduled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/appointment/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Appointment scheduled successfully");
        setIsAppointmentScheduled(true);
      } else {
        setMessage("Failed to schedule appointment");
      }
    } catch (error) {
      console.error("Error scheduling appointment:", error);
      setMessage("An error occurred");
    }
  };

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
      <img className="image-2-icon" alt="" src={Logo} />
      <img className="desktop-4-child" alt="" src="/line-1.svg" />
      <b className="Name-tag">Projects Data:</b>
      <div className="desktop-4-item">
        <div className="Schedule">
          <form onSubmit={handleSubmit}>
            <label>
              Reason:
              <input
                type="text"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Time:
              <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Schedule Appointment</button>
          </form>
          {isAppointmentScheduled && <p>Appointment scheduled successfully!</p>}
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

export default Schedule_Appointment;
