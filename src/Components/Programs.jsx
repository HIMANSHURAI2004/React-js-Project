import React from 'react';
import "./Programs.css"
import program1 from "../assets/program-1.png"
import program2 from "../assets/program-2.png"
import program3 from "../assets/program-3.png"
import programIcon1 from "../assets/program-icon-1.png"
import programIcon2 from "../assets/program-icon-2.png"
import programIcon3 from "../assets/program-icon-3.png"



function Programs(props) {
    return (
        <div className='programs w-[90%] my-20 mx-auto flex justify-between items-center gap-8'>
            <div className='relative program'>
                <img src={program1} alt="" className='rounded-xl w-full'/>
                <div className='captions'>
                    <img src={programIcon1} alt="" />
                    <p>Graduation Degree</p>
                </div>
                
            </div>
            <div className='relative program'>
                <img src={program2} alt="" className='rounded-xl w-full'/>
                <div className='captions'>
                    <img src={programIcon2} alt="" />
                    <p>Masters Degree</p>
                </div>
            </div>
            <div className='relative program'>
                <img src={program3} alt="" className='rounded-xl w-full'/>
                <div className='captions'>
                    <img src={programIcon3} alt="" />
                    <p>Post Graduation</p>
                </div>
            </div>
        </div>
    );
}

export default Programs;