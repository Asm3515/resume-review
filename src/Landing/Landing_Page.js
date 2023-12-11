import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Landing_Page = () => {
  const navigate = useNavigate();
  const [showCareerChoices, setShowCareerChoices] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("User");
    navigate("/login");
  };

  const handleSchedule = () => {
    navigate("/schedule");
  };

  const handleFileChange = (e) => {
    // Handle file selection
    setSelectedFile(e.target.files[0]);
  };

  const handleResumeUpload = () => {
    // Handle the logic for uploading the selected resume file
    // For simplicity, let's show some arbitrary career choices in a modal
    setShowCareerChoices(true);
  };

  const handleCloseModal = () => {
    setShowCareerChoices(false);
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Resume Review System</h1>

        <button className={styles.white_btn} onClick={handleSchedule}>
          Schedule Appointment
        </button>

        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>

      {/* Middle box for resume upload */}
      <div className={styles.middle_box}>
        <h2>Upload Your Resume</h2>
        <p>Get top 3 career choice predictions based on your resume.</p>
        {/* Add a file input for resume upload */}
        <input
          type="file"
          accept=".pdf,.docx"
          onChange={handleFileChange}
        />
        {/* Add a button to handle resume upload */}
        <button className={styles.green_btn} onClick={handleResumeUpload}>
          Upload Resume
        </button>
      </div>

      {/* Modal for displaying career choices */}
      {showCareerChoices && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <span className={styles.close} onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Top 3 Career Choices</h2>
            <ul>
              <li>Software Developer</li>
              <li>Data Scientist</li>
              <li>UX/UI Designer</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing_Page;
