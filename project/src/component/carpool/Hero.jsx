import React from 'react'
import { ReactTyped } from 'react-typed'
import MainCarousel from './MainCarousel'
const Hero = () => {
  return (

    <div style={{position: 'relative'}} className='text-black'>
        
        <MainCarousel/>
        
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-orange-300 uppercase font-bold p-2'>Tiết kiệm. Thông minh</h1>
            <div className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 uppercase'>
                <p >cần  
                <ReactTyped 
                className='pl-4 text-orange-300'
                strings={['xe ghép', 'tài xế']} 
                typeSpeed={120} backSpeed={140} loop/>
                 nghĩ đến Fcar</p>
            </div>
            <p className='md:text-3xl sm:text-2xl text-xl font-bold text-white'>Tạo hoặc tìm kiếm một nhóm để bắt đầu hành trình của bạn</p>
            
        </div>
    </div>
  )
}

export default Hero