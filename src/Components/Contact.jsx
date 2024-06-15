import React from "react";
import msgIcon from "../assets/msg-icon.png";
import mailIcon from "../assets/mail-icon.png";
import phoneIcon from "../assets/phone-icon.png";
import locationIcon from "../assets/location-icon.png";
import whiteArrow from "../assets/white-arrow.png";

function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ef15fee6-726f-4895-a44e-e44e2ea4b433");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className=" contact my-20 mx-auto max-w-[90%] flex  justify-between">
      <div className="basis-[48%] text-gray-600">
        <h1 className="flex mb-5 items-center  text-[22px] font-medium text-blue-950">
          Send us a message{" "}
          <img src={msgIcon} alt="" className="w-[35px] ml-3" />
        </h1>
        <p className="max-w-[450px] leading-[1.2] text-[15px]">
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>

        <div className="flex items-center my-5">
          <img src={mailIcon} alt="" className="w-[22px] mr-[10px]" />
          <p className="leading-[1.2] text-[15px]">Contact@GreatStack.dev</p>
        </div>
        <div className="flex items-center my-5">
          <img src={phoneIcon} alt="" className="w-[22px] mr-[10px]" />
          <p className="leading-[1.2] text-[15px]">+1 123-456-7890</p>
        </div>
        <div className="flex items-center my-5">
          <img src={locationIcon} alt="" className="w-[22px] mr-[10px]" />
          <p className="leading-[1.2] text-[15px]">77 Massachusetts Ave, Cambridge <br /> MA 02139, United States</p>
        </div>
      </div>
      <div className="basis-[48%] w-[90%]">
        <form className="flex flex-col" onSubmit={onSubmit}>
          <label htmlFor="" className="text-[15px] text-gray-500">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter your name"
            required
            className="block w-[100%] bg-violet-100 p-[10px] border-0 outline-none mt-1 mb-4 resize-none text-[12px]"
          />

          <label htmlFor="" className="text-[15px] text-gray-500">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id=""
            placeholder="Enter your Mobile Number"
            required
            className="block w-[100%] bg-violet-100 p-[10px] border-0 outline-none mt-1 mb-4 resize-none text-[12px]"
          />

          <label htmlFor="" className='text-[15px] text-gray-500'>Your Email</label>
                    <input type="email" name="email" id="" placeholder='Enter your email id' required
                    className='block w-[100%] bg-violet-100 p-[10px] border-0 outline-none mt-1 mb-4 resize-none text-[12px]'/>

          <label htmlFor="" className="text-[15px] text-gray-500">
            Write your messages here
          </label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
            className="block w-[100%] bg-violet-100 p-[10px] border-0 outline-none mt-1 mb-4 resize-none text-[12px]"
          ></textarea>

          <button
            type="submit"
            className="w-fit py-3 px-6 rounded-3xl text-white flex items-center gap-2 bg-blue-800 text-[14px]"
          >
            Submit Now <img src={whiteArrow} alt="" className="w-[20px]" />
          </button>
        </form>
        <span className="block my-[20px]">{result}</span>
      </div>
    </div>
  );
}

export default Contact;
