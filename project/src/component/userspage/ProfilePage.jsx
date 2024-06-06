import React, { useState, useEffect } from 'react';
import * as UserService from '../../service/UserService';
import { Link } from 'react-router-dom';
import {  Button } from "antd";

function ProfilePage() {
    const [profileInfo, setProfileInfo] = useState({});

    useEffect(() => {
        fetchProfileInfo();
    }, []);

    const fetchProfileInfo = async () => {
        try {
            const token = localStorage.getItem('token'); 
            const response = await UserService.getYourProfile(token);
            setProfileInfo(response.account);
        } catch (error) {
            console.error('Error fetching profile information:', error);
        }
    };

    return (
        <div className="contents">
            <h2 className='mx-auto'>Profile Information</h2>
            <p style={{textAlign:'center'}}> <img src={profileInfo?.image} style={{width: "200px",height:"200px"}} alt='profile-img'></img></p>
            <p>Name: {profileInfo?.name}</p>
            <p>Email: {profileInfo?.email}</p>
            {profileInfo?.role?.roleName === "USER" && (
                <Button><Link to={`/update-user/${profileInfo?.accountId}`}>Update This Profile</Link></Button>
            )}
        </div>
    );
}

export default ProfilePage;
