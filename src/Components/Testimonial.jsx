import React, { useRef, useState } from "react";
import backIcon from "../assets/back-icon.png";
import nextIcon from "../assets/next-icon.png";
import user1 from "../assets/user-1.png";
import user2 from "../assets/user-2.png";
import user3 from "../assets/user-3.png";
import user4 from "../assets/user-4.png";

function Testimonial() {

  let [tx,setTx]=useState(0);

  const slideForward=() =>{
      if(tx> -50)
      {
        setTx(tx-25)
      }
  }

  const slideBackward=() =>{
      if( tx < 0)
      {
        setTx(tx+25)
      }
  }

  return (
    <div className="testimonials my-[80px] mx-auto px-[80px] relative">
      <img
        src={backIcon}
        alt=""
        className="rounded-full p-4 bg-blue-900 w-[50px] absolute top-[50%] left-0 translate-y-[-50%] cursor-pointer"
        onClick={slideBackward}
      />
      <img
        src={nextIcon}
        alt=""
        className="rounded-full p-4 bg-blue-900 w-[50px] absolute top-[50%] right-0 translate-y-[-50%] cursor-pointer"
        onClick={slideForward}
      />
      <div className="overflow-hidden overflow-x-hidden duration-500">
        <ul className={`flex w-[200%] gap-8 translate-x-[${tx}%] duration-500`} >
          <li className="border p-7  shadow-xl">
            <div className="">
              <div className="flex gap-2 items-center">
                <img
                  src={user1}
                  alt=""
                  className="rounded-full w-[65px] border-4 border-blue-700"
                />
                <div>
                  <p className=" font-semibold text-blue-800">Emily Williams</p>
                  <p className="text-[14px] text-gray-500">Edusity, USA</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 pt-4  text-left max-w-[90%]">
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          
          <li className="border p-7  shadow-xl">
            <div className="">
              <div className="flex gap-2 items-center">
                <img
                  src={user2}
                  alt=""
                  className="rounded-full w-[65px] border-4 border-blue-700"
                />
                <div>
                  <p className=" font-semibold text-blue-800">William Jackson</p>
                  <p className="text-[14px] text-gray-500">Edusity, USA</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 pt-4  text-left max-w-[90%]">
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li><li className="border p-7  shadow-xl">
            <div className="">
              <div className="flex gap-2 items-center">
                <img
                  src={user3}
                  alt=""
                  className="rounded-full w-[65px] border-4 border-blue-700"
                />
                <div>
                  <p className=" font-semibold text-blue-800">Emily Williams</p>
                  <p className="text-[14px] text-gray-500">Edusity, USA</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 pt-4  text-left max-w-[90%]">
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li><li className="border p-7  shadow-xl">
            <div className="">
              <div className="flex gap-2 items-center">
                <img
                  src={user4}
                  alt=""
                  className="rounded-full w-[65px] border-4 border-blue-700"
                />
                <div>
                  <p className=" font-semibold text-blue-800">William Jackson</p>
                  <p className="text-[14px] text-gray-500">Edusity, USA</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 pt-4  text-left max-w-[90%]">
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Testimonial;
