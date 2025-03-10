import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import './SignUp.css';

const Login = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isAdmin: false,
    adminKey: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.isAdmin && !formData.adminKey) newErrors.adminKey = "Admin key is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      login();
      if (formData.isAdmin && formData.adminKey === "123") {
        navigate("/managea");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Login</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
            placeholder="Enter your email"
          />
          {errors.email && <small className="error-text">{errors.email}</small>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "input-error" : ""}
            placeholder="Create a password"
          />
          {errors.password && <small className="error-text">{errors.password}</small>}
        </div>

        <div className="inp">
          <input
            type="checkbox"
            name="isAdmin"
            checked={formData.isAdmin}
            onChange={handleChange}
            className="form-check-input"
          />
          <label className="form-check-label" style={{ marginTop: '2px', marginLeft: '5px' }}>Login as Admin</label>
        </div>

        {formData.isAdmin && (
          <div className="form-group">
            <label>Admin Key</label>
            <input
              type="text"
              name="adminKey"
              value={formData.adminKey}
              onChange={handleChange}
              className={errors.adminKey ? "input-error" : ""}
              placeholder="Enter the admin key"
            />
            {errors.adminKey && <small className="error-text">{errors.adminKey}</small>}
          </div>
        )}
        <br />

        <button type="submit" className="btn c1">Login</button>
      </form><br />
      <button type="button" className="btn-google c1">Continue with Google</button>
      <p className="login-redirect">
        Don’t have an account? <span className="login-link" onClick={() => navigate("/signup")}>Sign Up here</span>
      </p>
    </div>
  );
};

export default Login;
