import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  // const ContactUsRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [remarks, setRemarks] = useState("");

  // const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const values = {
      name: name,
      email: email,
      reason: reason,
      remarks: remarks,
    };
    if (!values.name.trim() || !values.email.trim() || !values.remarks.trim()) {
      toast.warning("Empty Fields!");
      return false;
    }

    await fetch("https://arc-fit.vercel.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((user) => {
        setName("");
        setEmail("");
        setReason("");
        setRemarks("");
        toast.success("We got your message 🤞✌️");
      })
      .catch((err) => {
        setName("");
        setEmail("");
        setReason("");
        setRemarks("");
        toast.error(err.remarks);
        toast.error("Seems, there is an issue with the Server.");
      });
  };

  return (
    <section>
      <div className="text-[15px] font-normal">
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>

      <div className="login-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
          Contact Us
        </h1>
      </div>

      {/* Contact */}
      <div className="bg-white py-[12rem] page-padding grid grid-cols-2 container gap-10 items-center md1000:grid-cols-1 ">
        {/* First Col */}
        <div className="md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%] min620:w-full">
          <h2 className="text-black text-[36px] font-bold leading-[1.2]">
            We are here for help you! To Shape Your Body.
          </h2>
          <p className="text-[16px] w-[95%] text-[#646464] font-medium my-[40px]">
            At ArcFit, we are dedicated to helping you achieve the body of your
            dreams. Our expert trainers and nutritionists will work with you to
            create a personalized fitness and nutrition plan that helps you
            reach your specific goals.
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto">
            <div className="flex flex-col relative">
              <h3 className="text-[2rem] font-bold mb-10">Ahmedabad, Bharat</h3>
              <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
              <p className="text-[15px] font-medium text-[#646464]">
                ArcFit, Opp. Master Crest,
                <br /> Navrangpura, Gujarat
              </p>
            </div>
            {/*  */}
            <div className="flex flex-col relative">
              <h3 className="text-[2rem] font-bold mb-10">Opening Hours</h3>
              <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
              <div className="text-[15px] font-medium text-[#646464]">
                <p>
                  <b>Mon to Fri &nbsp; :</b> 6:00 am — 9:00 pm
                </p>
                <p>
                  <b>Sat && Sun : </b> Premium Members Only
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col relative">
              <h3 className="text-[2rem] font-bold mb-10">Information</h3>
              <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
              <div className="text-[15px] font-medium text-[#646464]">
                <p>+91 1234567890</p>
                <p>&nbsp;info@arcfit.com</p>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col relative">
              <h3 className="text-[2rem] font-bold mb-10">Follow Us On</h3>
              <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
              <div className="text-[18px] font-medium text-black flex gap-5">
                <i className="fa-brands fa-facebook-f px-[16px] py-[13px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
                <i className="fa-brands fa-twitter p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
                <i className="fa-brands fa-instagram p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
                <i className="fa-brands fa-pinterest-p p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
              </div>
            </div>
          </div>
        </div>

        {/* second col ---*/}
        <form
          action="POST"
          name="contact-form"
          onSubmit={handleSubmit}
          className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#f8f8f8] rounded-2xl relative md1000:w-[65%] md1000:flex md1000:flex-col md1000:mx-auto md1000:mt-14 min800:w-[90%] min620:w-full"
        >
          <h3 className="text-[28px] font-bold mb-14">
            Leave Us Your Information
          </h3>
          <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[77px]"></span>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            value={name}
            className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid rounded-2xl border-[#e4e4e4] outline-none mb-8"
            placeholder="Your Full Name *"
            type="text"
          ></input>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            value={email}
            className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid rounded-2xl border-[#e4e4e4] outline-none mb-8"
            placeholder="Email Address *"
            type="email"
          ></input>

          <select
            onChange={(e) => {
              setReason(e.target.value);
            }}
            required
            value={reason}
            className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid rounded-2xl border-[#e4e4e4] outline-none mb-8"
          >
            <option>Select Query</option>
            <option>Body Building</option>
            <option>Boxing</option>
            <option>Running</option>
            <option>Fitness</option>
            <option>Yoga</option>
            <option>Workout</option>
            <option>Katate</option>
            <option>Meditation</option>
            <option>Cycling</option>
            <option>Other</option>
          </select>

          <textarea
            onChange={(e) => {
              setRemarks(e.target.value);
            }}
            required
            value={remarks}
            placeholder="Comment"
            className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid rounded-2xl border-[#e4e4e4] outline-none mb-8"
          ></textarea>

          <button
            type="submit"
            className="text-white bg-[#ff0336] w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6 rounded-2xl"
          >
            submit now
          </button>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
