import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as UserService from "../../service/UserService";
import logo from "../../assets/icon/logo.svg";
import { confirmPasswordValidation } from "../../config/ConfirmValidation";

const UpdatePass = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const initValues = {
    password: "",
    confirmPassword: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initValues,
    validationSchema: confirmPasswordValidation,
    onSubmit: async (values) => {
        try {
            const userData = await UserService.changePass(
                localStorage.getItem("token"),
                values.password
              );
              console.log("user: " + userData);
              console.log("token: " + userData.token);
              if (userData.token) {
                localStorage.setItem("token", userData.token);
                localStorage.setItem("role", userData.role);
                navigate("/profile");
              } else {
                setError("Invalid change password");
                navigate("/profile");
              }
        } catch (error) {
            setError("We can't find your account");
        }
    },
  });

  return (
    <section className="bg-gradient-to-r from-red-50 via-red-200 to-red-400 h-screen">
      <div className="px-0 py-10 mx-auto max-w-7xl sm:px-4">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6 text-gray-400">
          <img src={logo} alt="logo" className="mx-auto" />
        </div>
        <div className="w-full px-4 pt-5 pb-6 mx-0 mt-8 mb-6 rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
          <h1 className="mb-4 text-lg font-semibold text-center text-gray-600">
            Change New Password
          </h1>

          <form className="mb-8 space-y-4" onSubmit={handleSubmit}>
            <label
              htmlFor="password"
              className="mb-1 text-xs font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.password && (
              <small className="font-semibold mt-2 text-sm text-red-600 dark:text-red-500">
                {errors.password}
              </small>
            )}
            <br></br>
            <label
              htmlFor="confirmPassword"
              className="mb-1 text-xs font-medium text-gray-700"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={values.confirmPassword}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <small className="font-semibold mt-2 text-sm text-red-600 dark:text-red-500">
                {errors.confirmPassword}
              </small>
            )}
            {error && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500 text-center font-semibold">
                {error}
              </p>
            )}
            <button
              className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full text-white"
              type="submit"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdatePass;
