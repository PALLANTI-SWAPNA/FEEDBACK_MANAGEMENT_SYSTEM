import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    courseRating: "excellent",
    departmentRating: "excellent",
    suggestions: "",
    questions: {
      satisfaction: "",
    },
  });

  const location = useLocation();
  const department = location.state?.department || "N/A"; // Get the department from the previous page

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here (e.g., send feedback to the server)
    console.log("Feedback submitted: ", feedback);
  };

  return (
    <div className="feedback-container">
      <h2>Provide Your Feedback for {department} Department</h2>
      <form onSubmit={handleSubmit}>
        {/* Course Rating */}
        <div className="feedback-section">
          <label htmlFor="course-rating">Rate the Course Quality</label>
          <select
            id="course-rating"
            name="courseRating"
            value={feedback.courseRating}
            onChange={handleChange}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </select>
        </div>

        {/* Department Rating */}
        <div className="feedback-section">
          <label htmlFor="department-rating">Rate the Department</label>
          <select
            id="department-rating"
            name="departmentRating"
            value={feedback.departmentRating}
            onChange={handleChange}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </select>
        </div>

        {/* Suggestions Section */}
        <div className="feedback-section">
          <label htmlFor="suggestions">Suggestions for Improvement:</label>
          <textarea
            id="suggestions"
            name="suggestions"
            value={feedback.suggestions}
            onChange={handleChange}
            placeholder="Write your suggestions here"
          ></textarea>
        </div>

        {/* MCQ Section - Satisfaction with Course Content */}
        <div className="mcq-section">
          <label htmlFor="satisfaction">How satisfied are you with the course content?</label>
          <select
            id="satisfaction"
            name="satisfaction"
            value={feedback.questions.satisfaction}
            onChange={(e) =>
              setFeedback({
                ...feedback,
                questions: {
                  ...feedback.questions,
                  satisfaction: e.target.value,
                },
              })
            }
          >
            <option value="">Select</option>
            <option value="very_satisfied">Very Satisfied</option>
            <option value="satisfied">Satisfied</option>
            <option value="neutral">Neutral</option>
            <option value="dissatisfied">Dissatisfied</option>
            <option value="very_dissatisfied">Very Dissatisfied</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
