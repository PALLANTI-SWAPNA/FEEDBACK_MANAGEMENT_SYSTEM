import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./StudentFeedbackForm.css"; // Import CSS

const StudentDashboard = ({ studentData, onLogout }) => {
  // State for form inputs
  const [rollNumber, setRollNumber] = useState(studentData ? studentData.rollNumber : '');
  const [year, setYear] = useState(studentData ? studentData.year : '');
  const [department, setDepartment] = useState(studentData ? studentData.department : '');
  const [course, setCourse] = useState(studentData ? studentData.courses : '');
  
  // State to manage the feedback form visibility
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedback, setFeedback] = useState({
    cseCourse: "",
    cseSuggestions: "",
    eceCourse: "",
    eceSuggestions: "",
  });

  // State to show the feedback summary after submission
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  // Handle form submission to trigger the feedback form display
  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    setShowFeedbackForm(true);
  };

  // Handle feedback form submission
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    setFeedbackSubmitted(true);
  };

  // Handle changes in feedback input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback({
      ...feedback,
      [name]: value,
    });
  };

  return (
    <div className="dashboard-container">
      <header>
        <h1>Welcome, {studentData ? studentData.name : "Student"}</h1>
        <button onClick={onLogout} className="logout-button">Logout</button>
      </header>

      <section className="student-info">
        {/* Form for entering roll number, year, and department */}
        {!showFeedbackForm && !feedbackSubmitted ? (
          <form onSubmit={handleDetailsSubmit} className="student-form">
            <div className="info-container">
              <label htmlFor="rollNumber"><strong>Roll Number:</strong></label>
              <input 
                type="text" 
                id="rollNumber" 
                value={rollNumber} 
                onChange={(e) => setRollNumber(e.target.value)} 
                required 
              />
            </div>

            <div className="info-container">
              <label htmlFor="year"><strong>Year:</strong></label>
              <select 
                id="year" 
                value={year} 
                onChange={(e) => setYear(e.target.value)} 
                required
              >
                <option value="">Select Year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>

            <div className="info-container">
              <label htmlFor="department"><strong>Department:</strong></label>
              <select 
                id="department" 
                value={department} 
                onChange={(e) => setDepartment(e.target.value)} 
                required
              >
                <option value="">Select Department</option>
                <option value="CSE">Computer Science Engineering (CSE)</option>
                <option value="ECE">Electronics and Communication Engineering (ECE)</option>
                <option value="EEE">Electrical and Electronics Engineering (EEE)</option>
                <option value="BBA">Bachelor of Business Administration (BBA)</option>
              </select>
            </div>

              <div className="info-container">
    <label htmlFor="courses"><strong>Course:</strong></label>
    <select 
      id="courses" 
      value={course} 
      onChange={(e) => setCourse(e.target.value)} 
      required
    >
      <option value="">Select Course</option>
      {course[department]?.map((courseName) => (
        <option key={courseName} value={courseName}>
          {courseName}
        </option>
      ))}
    </select>
  </div>




            <button type="submit" className="submit-button">Submit</button>
          </form>
        ) : showFeedbackForm && !feedbackSubmitted ? (
          <div>
            {/* Show department-specific feedback form */}
            <h2>Provide Feedback for {department} Courses</h2>
            <form onSubmit={handleFeedbackSubmit}>
              {/* CSE Feedback */}
              {department === "CSE" && (
                <div>
                  <h3>Rate CSE Course Quality</h3>
                  <div>
                    <label>How would you rate the quality of CSE courses?</label>
                    <select
                      name="cseCourse"
                      value={feedback.cseCourse}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Rating</option>
                      <option value="Excellent">Excellent</option>
                      <option value="Good">Good</option>
                      <option value="Average">Average</option>
                      <option value="Poor">Poor</option>
                    </select>
                  </div>
                  <div>
                    <label>Suggestions for Improvement:</label>
                    <textarea 
                      name="cseSuggestions"
                      value={feedback.cseSuggestions}
                      onChange={handleInputChange}
                      placeholder="Write your suggestions here"
                    />
                  </div>
                </div>
              )}

              {/* ECE Feedback */}
              {department === "ECE" && (
                <div>
                  <h3>Rate ECE Course Quality</h3>
                  <div>
                    <label>How would you rate the quality of ECE courses?</label>
                    <select
                      name="eceCourse"
                      value={feedback.eceCourse}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Rating</option>
                      <option value="Excellent">Excellent</option>
                      <option value="Good">Good</option>
                      <option value="Average">Average</option>
                      <option value="Poor">Poor</option>
                    </select>
                  </div>
                  <div>
                    <label>Suggestions for Improvement:</label>
                    <textarea 
                      name="eceSuggestions"
                      value={feedback.eceSuggestions}
                      onChange={handleInputChange}
                      placeholder="Write your suggestions here"
                    />
                  </div>
                </div>
              )}

              {/* More departments can be added in a similar way */}

              <button type="submit" className="submit-button">Submit Feedback</button>
            </form>
          </div>
        ) : feedbackSubmitted ? (
          <div className="feedback-summary">
            <h2>Feedback Summary</h2>
            <p>Thank you for your feedback, {studentData ? studentData.name : "Student"}!</p>
            <p><strong>Department:</strong> {department}</p>
            <p><strong>Course Rating:</strong> {feedback[`${department.toLowerCase()}Course`]}</p>
            <p><strong>Suggestions:</strong> {feedback[`${department.toLowerCase()}Suggestions`]}</p>
            <Link to="/" className="home-link">Go to Home</Link>
          </div>
        ) : null}
      </section>

      <section className="home-button">
        <Link to="/" className="home-link">
          Home
        </Link>
      </section>
    </div>
  );
};

export default StudentDashboard;
