import React from "react";
import about from "../assets/about.png";
import playIcon from "../assets/play-icon.png";

function About({playState,setPlayState}) {
  return (
    <div className="about flex my-[90px] mx-auto items-center justify-between w-[90%]">
      <div className="relative basis-[40%]">
        <img src={about} alt="" className="rounded-xl" />
        <img
          src={playIcon}
          alt=""
          className="absolute top-[50%] left-[50%] w-[55px] translate-x-[-50%] cursor-pointer duration-500 translate-y-[-50%]"
          onClick={() =>{ setPlayState(true)}}
        />
      </div>
      <div className="basis-[56%]">
        <h1 className="uppercase text-blue-800 font-bold my-3">
          About University
        </h1>
        <p className="font-bold text-[32px] leading-10 w-[80%] mb-4">
          Nurturing Tomorrow's Leaders Today
        </p>
        <p className="mb-4 text-gray-500 text-[14px] leading-[18px] font-medium ">
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p className="mb-4 text-gray-500 text-[14px] leading-[18px] font-medium">
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p className="mb-4 text-gray-500 text-[14px] leading-[18px] font-medium">
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
}

export default About;
