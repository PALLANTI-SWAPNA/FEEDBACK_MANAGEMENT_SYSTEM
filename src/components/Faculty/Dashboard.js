import React, { useState } from "react";
import "./feedback.css"; // Import the CSS file

// FacultyDashboard Component
const FacultyDashboard = () => {
  const [facultyDetails, setFacultyDetails] = useState({
    employeeId: "",
    department: "",
    yearsOfExperience: "",
    coursesTaught: "",
  });

  const [newCourse, setNewCourse] = useState("");

  const handleCourseChange = (e) => setNewCourse(e.target.value);

  const handleCourseSubmit = (e) => {
    e.preventDefault();
    alert(`New course "${newCourse}" added!`);
    setNewCourse("");
  };

  return (
    <div>
      <h1>Faculty Dashboard</h1>
      <p>Welcome to the Faculty module.</p>

      {/* Faculty Login Section */}
      <div>
        <h3>Faculty Login</h3>
        <form>
          <div>
            <label>Employee ID:</label>
            <input
              type="text"
              value={facultyDetails.employeeId}
              onChange={(e) =>
                setFacultyDetails({ ...facultyDetails, employeeId: e.target.value })
              }
            />
          </div>
          <div>
            <label>Department:</label>
            <input
              type="text"
              value={facultyDetails.department}
              onChange={(e) =>
                setFacultyDetails({ ...facultyDetails, department: e.target.value })
              }
            />
          </div>
        </form>
      </div>

      {/* Faculty Details Section */}
      <div>
        <h3>Faculty Details</h3>
        <p><strong>Experience:</strong> {facultyDetails.yearsOfExperience} years</p>
        <p><strong>Department:</strong> {facultyDetails.department}</p>
        <p><strong>Courses Taught:</strong> {facultyDetails.coursesTaught}</p>
      </div>

      {/* Add Course Section */}
      <div>
        <h3>Add Course</h3>
        <form onSubmit={handleCourseSubmit}>
          <div>
            <label>Course Name:</label>
            <input
              type="text"
              value={newCourse}
              onChange={handleCourseChange}
            />
          </div>
          <button type="submit">Add Course</button>
        </form>
      </div>

      {/* Feedback Section */}
    
    </div>
  );
};

// AddFacultyForm Component
const AddFacultyForm = () => {
  const [facultyData, setFacultyData] = useState({
    name: "",
    department: "",
    course: "",
    experience: "",
    employeeId: "",
    yearAdded: new Date().getFullYear(), // Default to the current year
  });

  const handleChange = (e) => {
    setFacultyData({ ...facultyData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Faculty Data:", facultyData);
    alert("Faculty added successfully!");
    // Add logic to send data to the backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={facultyData.name}
        onChange={handleChange}
        required
      />

      <label>Department:</label>
      <input
        type="text"
        name="department"
        value={facultyData.department}
        onChange={handleChange}
        required
      />

      <label>Course:</label>
      <input
        type="text"
        name="course"
        value={facultyData.course}
        onChange={handleChange}
        required
      />

      <label>Experience:</label>
      <input
        type="number"
        name="experience"
        value={facultyData.experience}
        onChange={handleChange}
        required
      />

      <label>Employee ID:</label>
      <input
        type="text"
        name="employeeId"
        value={facultyData.employeeId}
        onChange={handleChange}
        required
      />

      <label>Year Added:</label>
      <input
        type="number"
        name="yearAdded"
        value={facultyData.yearAdded}
        onChange={handleChange}
        min="1900"
        max={new Date().getFullYear()}
        required
      />

      <button type="submit">Add Faculty</button>
    </form>
  );
};

// Main Dashboard Component
const MainDashboard = () => (
  <div>
    <FacultyDashboard />
    <hr />
    <AddFacultyForm />
  </div>
);

export default MainDashboard;
