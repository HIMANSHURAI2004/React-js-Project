import React from 'react';
import "./Hero.css";
import darkArrow from "../assets/dark-arrow.png"


function Hero() {
    return (
        <div className='hero flex justify-center items-center pl-[10%] pr-[10%]'>
            <div className='max-w-[800px] flex flex-col items-center justify-center text-center '>
                <h3 className=' text-[55px] font-semibold leading-[1.2] '>We Ensure better education <br /> for a better world</h3>
                <p className='max-w-[670px] mt-3 mx-auto mb-5 leading-[1.3] text-[15px]  '>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>

                <button className='flex items-center gap-2 text-gray-800 bg-white py-3 rounded-3xl px-6 text-[15px]'>Explore More <img src={darkArrow} className='h-3' alt="" /></button>
            </div>
        </div>
    );
}

export default Hero;