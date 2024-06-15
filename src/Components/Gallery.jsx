import React from 'react';
import gallery1 from "../assets/gallery-1.png"
import gallery2 from "../assets/gallery-2.png"
import gallery3 from "../assets/gallery-3.png"
import gallery4 from "../assets/gallery-4.png"
import whiteArrow from "../assets/white-arrow.png"

function Gallery() {
    return (
        <div className='campus flex flex-col justify-between items-center my-16 w-[90%] mx-auto'>
            <div className='flex justify-between items-center gap-6 '>
                <div>
                    <img src={gallery1} alt=""  className='rounded-lg w-[100%]'/>
                </div>
                <div>
                    <img src={gallery2} alt="" className='rounded-lg'/>
                </div>
                <div>
                    <img src={gallery3} alt="" className='rounded-lg'/>
                </div>
                <div>
                    <img src={gallery4} alt="" className='rounded-lg'/>
                </div>
            </div>
            <button className='mt-10 flex justify-center items-center gap-2 text-white text-[14px] py-3 px-6 rounded-3xl bg-blue-900'>See more here<img src={whiteArrow} alt=""  className='w-[20px]'/></button>
        </div>
    );
}

export default Gallery