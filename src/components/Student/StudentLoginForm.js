import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentFeedbackForm.css";  // Import the CSS file

const StudentLoginForm = ({ setStudentData }) => {
  const navigate = useNavigate();
  const [rollNumber, setRollNumber] = useState("");
  const [department, setDepartment] = useState("cse");
  const [courses, setCourse] = useState("data structures");
  const [year, setYear] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Validate roll number and year for the department
    if (
      (department === "cse" && (year < 1 || year > 4)) ||
      (department === "bba" && (year < 1 || year > 3))
    ) {
      setErrorMessage("Invalid year for the selected department.");
    } else {
      setStudentData({ rollNumber, department, year, courses });
      navigate("/student-dashboard");
    }
  };

  return (
    <div>
      <h1>Student Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Roll Number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            <option value="cse">CSE</option>
            <option value="bba">BBA</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="Text"
            placeholder="Courses"
            value={courses}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default StudentLoginForm;