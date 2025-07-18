import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom"; // for redirection
import "./Css/LoginSignup.css";

const SignupForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate(); // to redirect to login page

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, "Must be 3 characters or more").required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(6, "Must be 6 characters or more").required("Required"),
    }),
    onSubmit: (values) => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.email === values.email) {
        alert("User already exists! Please log in.");
      } else {
        // Save the new user in localStorage and log them in
        localStorage.setItem("user", JSON.stringify(values)); // Save to localStorage
        login(values); // Call login to update context
        alert("Signup successful!");
        navigate("/login"); // Redirect to login page after successful signup
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="loginsignup-fields">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="error">{formik.errors.name}</div>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="error">{formik.errors.password}</div>
        )}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
