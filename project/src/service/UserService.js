import axios from "axios";

export const login = async (email, password) =>{
    try {
        const  temp = await axios.post("http://localhost:8080/auth/login", {email, password});
        return temp.data;
    }catch (e) {
        console.log(e);
        throw e;
    }
}

export const loginGoogle = async (userData) =>{
    try {
        const  temp = await axios.post("http://localhost:8080/oauth2/login", userData);
        return temp.data;
    }catch (e) {
        console.log(e);
        throw e;
    }
}

export const register = async (userData) =>{
    try {
        const  temp = await axios.post("http://localhost:8080/auth/register", userData);
        return temp.data;
    }catch (e) {
        console.log(e);
        throw e;
    }
}

export const getAllUsers = async (token) =>{
    try {
        const  temp = await axios.get("http://localhost:8080/admin/get-all-users",  {
            headers: {Authorization: `Bearer ${token}`}
        });
        return temp.data;
    }catch (e) {
        console.log(e);
        throw e;
    }
}

export const getYourProfile = async (token) =>{
    try {
        const  temp = await axios.get("http://localhost:8080/adminuser/get-profile",  {
            headers: {Authorization: `Bearer ${token}`}
        });
        return temp.data;
    }catch (e) {
        console.log(e);
        throw e;
    }
}

export const updateUser = async (userId, userData, token) =>{
    try {
        const  temp = await axios.put(`http://localhost:8080/adminuser/update/${userId}`, userData, {
            headers: {Authorization: `Bearer ${token}`}
        });
        return temp.data;
    }catch (e) {
        console.log(e);
        throw e;
    }
}

export const logout = async() => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
}

export const isAuthenticated = async() => {
    const token = localStorage.getItem('token')
    return !!token
}

export const isAdmin = async() => {
    const role = localStorage.getItem('role')
    return role === 'ADMIN'
}

export const isUser = async() => {
    const role = localStorage.getItem('role')
    return role === 'USER'
}