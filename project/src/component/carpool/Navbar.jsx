import React from 'react'
import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = ()=>{
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Hỗ trợ</li>
            <li className='p-4'>Giới thiệu</li>
            <li className='p-4'>Chính sách</li>
            <li className='p-4'>Chương trình</li>
            <li className='p-4'>Tra cứu mã vé</li>
        </ul>

        <div onClick={handleClick} className='block md:hidden'>
            {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#fff] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 ml-6'>REACT.</h1>
        <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600'>Hỗ trợ</li>
            <li className='p-4 border-b border-gray-600'>Giới thiệu</li>
            <li className='p-4 border-b border-gray-600'>Chính sách</li>
            <li className='p-4 border-b border-gray-600'>Chương trình</li>
            <li className='p-4 border-b border-gray-600'>Tra cứu mã vé</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar;