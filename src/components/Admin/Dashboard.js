import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link component for navigation
import "./AdminDashboard.css"; // Import the CSS file for styling

const AdminDashboard = () => {
  const [newFaculty, setNewFaculty] = useState({ name: "", department: "", password: "" });
  const [faculty, setFaculty] = useState([]);

  const addFaculty = () => {
    if (newFaculty.name && newFaculty.department && newFaculty.password) {
      const newFacultyList = [
        ...faculty,
        { id: faculty.length + 1, ...newFaculty },
      ];
      setFaculty(newFacultyList);
      setNewFaculty({ name: "", department: "", password: "" });
    }
  };

  const removeFaculty = (id) => {
    const updatedFaculty = faculty.filter((facultyMember) => facultyMember.id !== id);
    setFaculty(updatedFaculty);
  };

  const changePassword = (id, newPassword) => {
    const updatedFaculty = faculty.map((facultyMember) =>
      facultyMember.id === id ? { ...facultyMember, password: newPassword } : facultyMember
    );
    setFaculty(updatedFaculty);
  };

  const generateFacultyReport = (id) => {
    const facultyMember = faculty.find((facultyMember) => facultyMember.id === id);
    if (facultyMember) {
      return (
        <div>
          <h3>Faculty Report</h3>
          <p>Name: {facultyMember.name}</p>
          <p>Department: {facultyMember.department}</p>
          <p>Password: {facultyMember.password}</p>
        </div>
      );
    }
    return <p>Faculty not found.</p>;
  };

  const generateAllFacultyReports = () => {
    return (
      <div>
        <h3>All Faculty Reports</h3>
        {faculty.length > 0 ? (
          faculty.map((facultyMember) => (
            <div key={facultyMember.id}>
              <h4>{facultyMember.name} - {facultyMember.department}</h4>
              <p>Password: {facultyMember.password}</p>
            </div>
          ))
        ) : (
          <p>No faculty available to generate reports.</p>
        )}
      </div>
    );
  };

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>

      {/* Add Faculty Form */}
      <section>
        <h2>Add New Faculty</h2>
        <div className="add-form">
          <input
            type="text"
            placeholder="Faculty Name"
            value={newFaculty.name}
            onChange={(e) => setNewFaculty({ ...newFaculty, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Department"
            value={newFaculty.department}
            onChange={(e) => setNewFaculty({ ...newFaculty, department: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={newFaculty.password}
            onChange={(e) => setNewFaculty({ ...newFaculty, password: e.target.value })}
          />
          <button onClick={addFaculty}>Add Faculty</button>
        </div>
      </section>

      {/* Faculty List */}
      <section>
        <h2>Faculty List</h2>
        <ul>
          {faculty.map((facultyMember) => (
            <li key={facultyMember.id}>
              {facultyMember.name} - {facultyMember.department}
              <button onClick={() => removeFaculty(facultyMember.id)}>Remove Faculty</button>
              <button
                onClick={() => {
                  const newPassword = prompt("Enter new password:");
                  if (newPassword) {
                    changePassword(facultyMember.id, newPassword);
                  }
                }}
              >
                Change Password
              </button>
              <button onClick={() => alert(generateFacultyReport(facultyMember.id))}>
                Generate Report
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Generate All Faculty Reports */}
      <section>
        <h2>Generate All Faculty Reports</h2>
        <button onClick={() => alert(generateAllFacultyReports())}>
          Generate All Reports
        </button>
      </section>

      {/* Back to Home Page */}
      <section>
        <Link to="/" className="back-to-home">
          Back to Home Page
        </Link>
      </section>
    </div>
  );
};

export default AdminDashboard;
