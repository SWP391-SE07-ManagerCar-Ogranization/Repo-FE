import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    const evt = new CustomEvent("storage", {});
    window.dispatchEvent(evt);
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Logging Out...</h2>
      </div>
    </div>
  );
};

export default Logout;
