import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.png"
import {Link , Element} from "react-scroll"

function Navbar() {

    const [sticky,setSticky] =useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",() =>{
            window.scrollY > 100 ? setSticky(true): setSticky(false);
        })
    },[])
    return (
        <div className={` p-2 min-h-14 fixed top-0 w-[100%] z-10 ${sticky ? 'bg-blue-800 duration-500':''}`}>
            <nav className='pl-[10%] pr-[10%] mx-auto flex justify-between items-center ' >
                <img src={logo} alt="" className='w-[160px] h-8'/>
                <ul className='flex gap-9 items-center text-white text-[15px]'>
                    <li className='cursor-pointer'><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
                    <li className='cursor-pointer'><Link to='programs' smooth={true} offset={-260} duration={500} >Program</Link></li>
                    <li className='cursor-pointer'><Link to='about' smooth={true} offset={-140} duration={500} >About us</Link></li>
                    <li className='cursor-pointer'><Link to='campus' smooth={true} offset={-260} duration={500} >Campus</Link></li>
                    <li className='cursor-pointer'><Link to='testimonials' smooth={true} offset={-240} duration={500} >Testimonials</Link></li>
                    <li><button className='text-gray-800 bg-white p-2 rounded-3xl px-6'><Link to='contact' smooth={true} offset={-210} duration={500}>Contact us</Link></button></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;