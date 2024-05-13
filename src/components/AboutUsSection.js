import React, { useRef, useEffect } from "react";
import "tailwindcss/tailwind.css";
import aboutSectionImg from "../assets/ab.png";

function AboutUsSection() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (leftRef.current) {
        leftRef.current.style.animation = "leftMotion 2s linear forwards";
      }
      if (rightRef.current) {
        rightRef.current.style.animation = "rightMotion 2s linear forwards";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="about" className=" bg-slate-300 flex  justify-center items-center gap-2 h-screen">
      <style>
        {`
          @keyframes leftMotion {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(0%);
            }
          }

          @keyframes rightMotion {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0%);
            }
          }
        `}
      </style>

      <div className="w-[40%] flex justify-center items-center" ref={leftRef}>
        <div className="p-6 rounded-lg">
          <img
            src={aboutSectionImg}
            alt="About Section"
            className="mt-4 rounded-lg object-contain"
          />
        </div>
      </div>

      <div className="w-[50%] flex justify-center items-center" ref={rightRef}>
        <div className="p-6 rounded-lg shadow-md flex flex-col gap-5">
          <h1 className="text-4xl text-black font-bold">ABOUT US</h1>
          <p className="text-black">
            We're Developers, We just happen to be doing Development. D&W tech
            is the fruit of a handful of engineers and creative artists based in
            India coming together to pursue a hunch they had: the world could
            present thoughts and ideas with more clarity, flair, and empathy.
            <br />
            <ul class="max-w-md space-y-1  list-inside ">
              <li class="flex items-center">
                <svg
                  class="w-8 h-7 me-2 text-[#FFA808] flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Inspired by the Innovations
              </li>
              <li class="flex items-center">
                <svg
                  class="w-9 h-7 me-2 text-[#FFA808] flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Experienced team with Tech, business, and language expertise
              </li>
              <li class="flex items-center">
                <svg
                  class="w-9 h-7 me-2 text-[#FFA808] flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Personalized service going beyond the call of duty
              </li>
              <li class="flex items-center">
                <svg
                  class="w-9 h-7 me-2   text-[#FFA808] flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Presently diversifying into branding plus consultancy services
              </li>
            </ul>
          </p>
          <button className=" py-3 mt-4  px-5 rounded-xl bg-[#FFA808] hover:bg-slate-300 transition-all duration-300 ease-linear hover:text-[#FFA808] w-fit">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
