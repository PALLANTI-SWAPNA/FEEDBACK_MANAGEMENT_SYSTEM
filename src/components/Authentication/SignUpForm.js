import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student", // default role
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setError(
        "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    // Proceed to login page after sign-up
    setError("");
    console.log("User Data:", formData);
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f7f9fc",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          width: "400px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={{
              display: "block",
              margin: "10px auto",
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{
              display: "block",
              margin: "10px auto",
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
            style={{
              display: "block",
              margin: "10px auto",
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
            style={{
              display: "block",
              margin: "10px auto",
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          >
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="admin">Admin</option>
          </select>
          {error && (
            <p style={{ color: "red", fontSize: "14px", margin: "10px 0" }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              marginTop: "10px",
              backgroundColor: "#457b9d",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Sign Up
          </button>
        </form>
        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Already have an account?{" "}
          <a
            href="/login"
            style={{ color: "#1E3A8A", textDecoration: "none", fontWeight: "bold" }}
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
