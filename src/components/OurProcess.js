import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../Api/Data";
import { FaSearch } from "react-icons/fa";

const LeftContent = () => (
  <div className="flex flex-col  gap-3  items-center justify-center h-screen bg-gray-100  px-20">
    <h1 className="text-3xl  text-dark font-bold  mb-5">OUR PROCESS</h1>
    <p className=" text-black leading-normal flex text-4xl ">
      Listen. Question. Understand. Brainstorm. Design. Development. Fine-tune.
      And Deploy.
    </p>

    <p className="text-base text-black">
      We view the process of development as a process of soul-searching. Our
      Client meetings are opportunities for both parties to think beyond the
      mundane, to review, redraw and re-present the company, product or idea
      from a fresh perspective. Though a project is built using words and
      images, we believe it is one's own clarity and conviction that ultimately
      convinces others. We help channel this conviction into the project by
      quizzing our Clients using simple techniques such as Socratic questioning.
    </p>
  </div>
);

const RightContent = () => (
  <div className=" bg-slate-300  flex justify-center pl-5 h-screen items-center">
    <section className="text-black w-full ">
      <div className="container md:px-5 mx-auto h-full   flex flex-wrap">
        <div className="flex flex-wrap h-full  w-full ">
          <div className="lg:w-2/5  md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-yellow-400 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                <FaSearch />
              </div>
              <div className="flex-grow pl-4  min-w-96">
                <h2 className=" font-bold title-font text-sm text-gray-950 mb-1 tracking-wider">
                  Listen. Question. Understand.
                </h2>
                <p className="leading-relaxed">
                  In no more than three initial meetings, we exchange a 360°
                  communication with Client, building a shared understanding and
                  conviction about the purpose of the project.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-yellow-400 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="#4154F1"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4 min-w-96">
                <h2 className="font-bold title-font text-sm text-gray-950 mb-1 tracking-wider">
                  Brainstorm. Discover.
                </h2>
                <p className="leading-relaxed ">
                  We leverage our team strengths and cross-domain knowledge to
                  research, brainstorm and fill the gaps, finally catching a
                  solid line of reasoning that would address most of the target
                  audience's questions and allay their concerns
                </p>
              </div>
            </div>

            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="#4154F1"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4 min-w-96">
                <h2 className="font-bold title-font text-sm text-gray-950 mb-1 tracking-wider">
                  Design. Fine-tune. Deploy.
                </h2>
                <p className="leading-relaxed ">
                  We involve our design team early so that the story and design
                  crystallize together and merge in synergy like good lyrics and
                  music do. We also assist the Client in simulating the project
                  delivery if so requested.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const OurProcess = () => (
  <div className="flex">
    <div className="w-1/2">
      <LeftContent />
    </div>
    <div className="w-1/2">
      <RightContent />
    </div>
  </div>
);

export default OurProcess;
