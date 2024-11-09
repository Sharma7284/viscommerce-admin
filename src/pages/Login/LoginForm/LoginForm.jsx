import React from "react";
import { Formik } from "formik";
import APP_LOGO from "../Assets/APP_LOGO.webp";
import "./LoginForm.scss";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <div id="login-form" className="login-form">
      <img src={APP_LOGO} alt={APP_LOGO} width={150} />
      <Formik
        initialValues={{ email: "admin@viscommerce.com", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = `Email is required.`;
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = `Invalid email address.`;
          }
          if (!values.password) {
            errors.password = `Password is required.`;
          } else if (values.password.length < 5) {
            errors.password = `Password must be minimun 5 character.`;
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          localStorage.setItem("user", JSON.stringify(values));
          if (
            values.email === `admin@viscommerce.com` &&
            values.password === `admin`
          ) {
            navigate("/dashboard");
          } else {
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-input-groups">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="input email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter your email address"
              />
              <span className="error">
                {errors?.email && touched.email && errors.email}
              </span>
            </div>
            <div className="form-input-groups">
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="input password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter your password"
              />
              <span className="error">
                {errors.password && touched.password && errors.password}
              </span>
            </div>
            <button className="button" type="submit" disabled={isSubmitting}>
              Login
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
