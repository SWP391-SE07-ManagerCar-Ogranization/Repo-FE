import './App.css';
import logo from './assets/icon/logo.svg'
import React, { useState } from 'react';
function App() {
  const [inputValue, setInputValue] = useState('');

  // Hàm xử lý sự kiện onBlurs
  const handleBlur = (event) => {
    console.log('Input lost focus');
    // Thực hiện các thao tác xử lý khi phần tử mất focus, ví dụ: kiểm tra dữ liệu, xác thực, lưu trữ, vv.
  };

  return (
    <div>
      <h1>hello</h1>
     
    </div>
  );
}

export default App;
