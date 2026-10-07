import React from "react";
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import img1 from '../components/img1.jpg'
import img2 from '../components/img2.jpg'
import img3 from '../components/img3.jpg'
import img5 from '../components/img5.jpg'

const Slides = [
    {
        title:"Your Luxury Hotel for Vacation",
        bg:img1,
        bnText:"Room & Suites",
    },
    {
        title:"Your Best Choce For Vacation",
        bg:img2,
        bnText:"Room & Suites",
    },
    {
        title:"Enjoy Your Destiny",
        bg:img3,
        bnText:"Room & Suites",
    },
    {
        title:"Perfect Stayouts for Travellers",
        bg:img5,
        bnText:"Room & Suites",
    },

];

const Slider = () => {
    return(
        <Swiper className=" h-[600px] lg:h-860px">
            {Slides.map((Slide,index)=>{
                // const {title,bg,bnText} = Slide;
                return <SwiperSlide className="h-full bg-black relative flex justify-center items-center" key={index}>
                    <div className="z-20 text-white text-2xl text-center">
                        <div className=" uppercase font-tertiary tracking-[6px] mb-5 mx-6">Just Enjoy and Relax</div>
                        <h1 className="text-[32px] font-tertiary  uppercase tracking-[6px]">{Slide.title}</h1>
                        
                        <button className="bg-accent rounded-lg translate-y-10 p-4 hover:bg-transparent duration-500 hover:text-accent font-bold mx-auto">See Our Rooms</button>
                    </div>
                    <div className="absolute w-full h-full top-0">
                        <img className="object-cover w-full h-full" src={Slide.bg} alt="" />
                    </div>
                    <div className="absolute w-full h-full bg-black/70"></div>
                </SwiperSlide>
            })}

        </Swiper>
    )
}

export default Slider