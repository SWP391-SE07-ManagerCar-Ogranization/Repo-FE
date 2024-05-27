import React, { useState } from "react";
import { useFormik } from "formik";
import { signupValidation } from "../../config/signupValidation";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import * as UserService from "../../service/UserService";
import { Link, useNavigate } from "react-router-dom";

function LoginPage2() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const initValues = {
    email: "",
    password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initValues,
    validationSchema: signupValidation,
    onSubmit: async (values) => {
      const userData = await UserService.login(values.email, values.password);
      console.log(userData);
      if (userData.token) {
        localStorage.setItem("token", userData.token);
        localStorage.setItem("role", userData.role);
        navigate("/");
      } else {
        setError("Invalid email or password");
      }
    },
  });

  const handleSubmitGoogle = async (formData) => {
    try {
      const userData = await UserService.loginGoogle(formData);
      if (userData.token) {
        localStorage.setItem("token", userData.token);
        localStorage.setItem("role", userData.role);
        navigate("/");
      } else {
        setError(userData.message);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const onSuccessGoogle = async (credentialResponse) => {
    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
    const newFormData = {
      name: credentialResponseDecoded.name,
      email: credentialResponseDecoded.email,
    };
    handleSubmitGoogle(newFormData);
  };

  return (
    <section className="bg-white-900">
      <div className="px-0 py-20 mx-auto max-w-7xl sm:px-4">
        <div className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
          <h1 className="mb-4 text-lg font-semibold text-center text-gray-900">
            Log in to your account
          </h1>

          <form className="mb-8 space-y-4" onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="mb-1 text-xs font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <br></br>
            {errors.email && <small>{errors.email}</small>}
            <label
              htmlFor="password"
              className="mb-1 text-xs font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              autoComplete="current-password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.password && <small>{errors.password}</small>}
            {error && <p className="error-message text-center">{error}</p>}
            <button className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full text-white" type="submit">
              Login
            </button>
          </form>

          <div class="space-y-8">
            <div
              class="text-center border-b border-gray-200"
              style={{ lineHeight: "0px" }}
            >
              <span
                class="p-2 text-xs font-semibold tracking-wide text-orange-600 uppercase bg-white"
                style={{ lineHeight: "0px" }}
              >
                Or
              </span>
            </div>
            <div className="grid gap-4 ">
                <GoogleLogin
                  onSuccess={onSuccessGoogle}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                  useOneTap
                  shape="pill"
                />
            </div>
          </div>
        </div>
        <p class="mb-4 text-xs text-center text-gray-400">
          <Link to={'/'} className="text-purple-200 underline hover:text-white">
            Create an account
          </Link>
          ·
          <Link to={'/'} className="text-purple-200 underline hover:text-white">
            Forgot password
          </Link>
        </p>
      </div>
    </section>
  );
}

export default LoginPage2;
