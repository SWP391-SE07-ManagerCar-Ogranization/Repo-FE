import logo from './assets/icon/logo.svg'
import React, { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import  Dashboard  from "./layouts/dashboard";
import FeedbackDriver from "./pages/Customer/feedbackDriver";
function App() {
  // Hàm xử lý sự kiện onBlurs
  const handleBlur = (event) => {
    console.log('Input lost focus');
    // Thực hiện các thao tác xử lý khi phần tử mất focus, ví dụ: kiểm tra dữ liệu, xác thực, lưu trữ, vv.
  };

  return (
    <Routes>
    <Route path="/dashboard/*" element={<Dashboard />} />
    <Route path="/dashboard/" element={<Navigate to="/dashboard/home" replace />} />
    <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    <Route path="/feedback-driver/" element={<FeedbackDriver/>} />
  </Routes>
  );
}

export default App;
