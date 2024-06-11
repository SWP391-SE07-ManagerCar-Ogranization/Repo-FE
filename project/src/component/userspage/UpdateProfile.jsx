import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as UserService from "../../service/UserService";
import { toast } from "react-toastify";
import { Input } from "@material-tailwind/react";

export default function UpdateProfile() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    image: "",
  });

  useEffect(() => {
    fetchUserDataById();
  }, []);

  const fetchUserDataById = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await UserService.getYourProfile(token);
      const { name, email, image } = response.account;
      setUserData({ name, email, image });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      handleOnSubmitImg(e);
      const res = await UserService.updateUser(userId, userData, token);
      console.log(res);
      toast.success("Update Sucessfully !");
      navigate("/profile");
    } catch (error) {
      toast.error("Fail to upload");
      console.error("Error updating user profile:", error);
    }
  };

  function handleOnChangeImg(changeEvent) {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      setUserData((prev) => ({
        ...prev,
        image: onLoadEvent.target.result,
      }));
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  const handleOnSubmitImg = async (event) => {
    try {
      const form = event.currentTarget;
      const fileInput = Array.from(form.elements).find(
        ({ name }) => name === "file"
      );
      const formData = new FormData();
      for (const file of fileInput.files) {
        formData.append("file", file);
      }
      formData.append("upload_preset", "ml_default");
      const data = await fetch(
        "https://api.cloudinary.com/v1_1/dxge4xlbh/image/upload",
        {
          method: "POST",
          body: formData,
        }
      ).then((r) => r.json());
      console.log(data);
      setUserData((prev) => ({
        ...prev,
        image: data.url,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-gradient-to-r from-red-50 via-red-200 to-red-400 h-screen">
      <div className="px-0 py-10 mx-auto max-w-7xl sm:px-4">
        <div className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
          <h1 className="mb-4 text-lg font-semibold text-center text-gray-600">
            Update User
          </h1>
          <form className="mb-8 space-y-4" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <Input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                label="Full name"
              />
            </div>
            <div>
              <Input
                disabled
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                label="Disabled"
              />
            </div>
            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="file_input"
              >
                Upload file
              </label>
              <img
                src={userData.image}
                style={{ width: "200px", height: "200px" }}
                alt="img"
              />
              <br></br>
              <input
                onChange={handleOnChangeImg}
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              />
              <p
                class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
            <br></br>
            <button className="bg-orange-400 hover:focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full text-white">
              Update
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
