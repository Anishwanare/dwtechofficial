import React, { useRef, useEffect } from "react";
import "tailwindcss/tailwind.css";
import aboutSectionImg from "../assets/ab.png";

function AboutUsSection() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="bg-slate-300 flex flex-col md:flex-row justify-center items-center gap-10 h-auto md:h-screen px-6 md:px-16 py-12">
      <style>
        {`
          .animate-in {
            animation: fadeIn 1.2s ease-in-out forwards;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      {/* Left Section (Image) */}
      <div className="w-full md:w-[40%] flex justify-center items-center" ref={leftRef}>
        <img src={aboutSectionImg} alt="About Section" className="mt-4 rounded-lg object-contain max-w-[90%] md:max-w-full" />
      </div>

      {/* Right Section (Text) */}
      <div className="w-full md:w-[50%] flex justify-center items-center" ref={rightRef}>
        <div className="p-6 md:p-8 rounded-lg shadow-md flex flex-col gap-5 bg-white">
          <h1 className="text-4xl text-yellow-500 font-bold">ABOUT US</h1>
          <p className="text-gray-700">
            We're Developers, We just happen to be doing Development. D&W Tech is the fruit of a handful of engineers and creative artists based in India, coming together to present thoughts and ideas with more clarity, flair, and empathy.
          </p>
          <ul className="max-w-md space-y-3 list-inside">
            <ListItem text="Inspired by the Innovations" />
            <ListItem text="Experienced team with Tech, business, and language expertise" />
            <ListItem text="Personalized service going beyond the call of duty" />
            <ListItem text="Presently diversifying into branding plus consultancy services" />
          </ul>
          <button className="py-3 mt-4 px-6 rounded-xl bg-[#FFA808] hover:bg-yellow-600 transition-all duration-300 ease-in-out hover:text-white self-start">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

const ListItem = ({ text }) => (
  <li className="flex items-center">
    <CheckIcon />
    {text}
  </li>
);

const CheckIcon = () => (
  <svg
    className="w-8 h-7 me-2 text-[#FFA808] flex-shrink-0"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
  </svg>
);

export default AboutUsSection;
