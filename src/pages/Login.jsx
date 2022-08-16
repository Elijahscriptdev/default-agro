import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from 'yup';

import { login } from "../redux/actions/AuthActions";

import Spinner from "../components/Spinner";

import logo from "../assets/trade_buza_logo.png";
import "./Login.scss";
import { validations } from "../utils/validations";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.AuthReducer.isLoading);

  const schemaValidation = Yup.object({
    email: validations.email("Email").required("Email is required"),
    password: validations.password("Password", 8, 24).required("Password is required")
  });

  return (
    <div className="flex flex-row">
      <div className="md:w-3/5 w-full mx-auto h-screen flex flex-col justify-center">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={schemaValidation}
          onSubmit={async (values, { setSubmitting }) => {
            const body = {
              email: values.email,
              password: values.password,
              source: 'web'
            };
            dispatch(login(body, navigate));
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
            isValid,
            dirty,
          }) => (
            <form onSubmit={handleSubmit}>
              <img src={logo} alt="tradebuza" style={{margin: "0 auto 1.8rem", display: "block"}}/>
              <div className="form_wrapper">
                <p className="text-xl text-gray-500 font-bold text-center">
                  Sign In
                </p>
                <div className="form_input_wrapper">
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter email address..."
                    className={
                      errors.email && touched.email ? "input-error" : null
                    }
                  />
                  {errors.email && touched.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>
                <div className="form_input_wrapper password-input">
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter password"
                    className={
                      errors.password && touched.password ? "input-error" : null
                    }
                  />
                  {errors.password && touched.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </div>

                <div className="login-btn">
                  <button type="submit">
                    {isLoading ? (
                      <Spinner size={20} color="secondary" />
                    ) : (
                      "LOGIN"
                    )}
                  </button>
                </div>
                <div className="mt-4">
                  <a href="#e" >Forgot Password?</a>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
