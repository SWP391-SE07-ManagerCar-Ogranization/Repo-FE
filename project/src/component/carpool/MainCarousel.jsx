import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import MainCarouselData from './data/MainCarouselData'

const items = MainCarouselData.map((item, index)=>{
    return (
        <img style={{width: '100%', height: '600px'}} src={item.image} className="cursor-pointer" data-value={index} role='presentation' alt=''/>
    )
})
const MainCarousel = () => (
    <AliceCarousel      
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
    />
);

export default MainCarousel