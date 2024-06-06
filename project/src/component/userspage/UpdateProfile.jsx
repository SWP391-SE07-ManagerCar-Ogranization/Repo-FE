import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as UserService from '../../service/UserService';

export default function UpdateProfile() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    image: '',
  });

  useEffect(() => {
    fetchUserDataById(); 
  }, []); 

  const fetchUserDataById = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await UserService.getYourProfile(token);
      const { name, email,image } = response.account;
      setUserData({ name, email,image });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const token = localStorage.getItem('token');
        console.log(token);
        handleOnSubmitImg(e);
        const res = await UserService.updateUser(userId, userData, token);
        console.log(res);
        navigate("/profile");
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  function handleOnChangeImg(changeEvent) {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      setUserData((prev)=> ({
        ...prev,
        image: onLoadEvent.target.result
      }));
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
  }

   const handleOnSubmitImg = async (event) => {
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
    setUserData((prev)=> ({
      ...prev,
      image: data.url
    }));
  }

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Email:</label>
          <input disabled type="email" name="email" value={userData.email} onChange={handleInputChange} />
        </div>
        <div>
          <label>Avatar:</label>
          <img src={userData.image} style={{width: "200px",height:"200px"}} alt="img"/>
          <input type="file" name="file" onChange={handleOnChangeImg} />
        </div>
        <br></br>
      <button>Update</button>
      </form>
    </div>
  );
}
