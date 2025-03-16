import React from "react";
import { FaSearch } from "react-icons/fa";

const LeftContent = () => (
  <div className="flex flex-col gap-3 items-center justify-center h-auto md:h-screen bg-gray-100 px-6 md:px-20 py-10">
    <h1 className="text-3xl text-yellow-500 font-bold mb-5 text-center">OUR PROCESS</h1>
    <p className="text-black leading-normal flex text-2xl md:text-4xl text-center">
      Listen. Question. Understand. Brainstorm. Design. Development. Fine-tune.
      And Deploy.
    </p>
    <p className="text-base text-black text-center">
      We view the process of development as a process of soul-searching. Our
      Client meetings are opportunities for both parties to think beyond the
      mundane, to review, redraw and re-present the company, product, or idea
      from a fresh perspective.
    </p>
  </div>
);

const RightContent = () => (
  <div className="bg-slate-300 flex justify-center px-5 md:px-10 py-10 md:py-0 h-auto md:h-screen items-center">
    <section className="text-black w-full max-w-4xl">
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-col w-full">
          <div className="lg:w-2/5 md:pr-10 md:py-6">
            {["Listen. Question. Understand.", "Brainstorm. Discover.", "Design. Fine-tune. Deploy."].map((title, index) => (
              <div className="flex relative pb-12 last:pb-0" key={index}>
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-yellow-400"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white relative z-10">
                  <FaSearch />
                </div>
                <div className="flex-grow pl-4 min-w-0 md:min-w-96">
                  <h2 className="font-bold text-sm text-gray-950 mb-1 tracking-wider">{title}</h2>
                  <p className="leading-relaxed text-sm md:text-base">
                    {index === 0 && "In no more than three initial meetings, we exchange a 360° communication with Client, building a shared understanding and conviction about the purpose of the project."}
                    {index === 1 && "We leverage our team strengths and cross-domain knowledge to research, brainstorm and fill the gaps, finally catching a solid line of reasoning that would address most of the target audience's questions and allay their concerns."}
                    {index === 2 && "We involve our design team early so that the story and design crystallize together and merge in synergy like good lyrics and music do. We also assist the Client in simulating the project delivery if so requested."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

const OurProcess = () => (
  <div className="flex flex-col md:flex-row">
    <div className="w-full md:w-1/2">
      <LeftContent />
    </div>
    <div className="w-full md:w-1/2">
      <RightContent />
    </div>
  </div>
);

export default OurProcess;
