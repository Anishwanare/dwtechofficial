import React from "react";
import { motion } from "framer-motion";
import ForteCard from "./ForteCard";

function OurForteSection() {
  return (
    <section className="py-20 bg-zinc-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center px-4 py-6">
          <div className="flex flex-col gap-6 w-full md:w-1/3">
            <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-500">OUR FORTE</h1>
            <p className="mt-4 text-lg md:text-xl text-slate-900">
              Making Websites that boost your Business
            </p>
            <ForteCard
              title="Profiles Static Website"
              description="We walk the extra mile with you, digging deep to discover your company's 'Why'. Building on this bedrock, we reflect on the current market situation and decisively spotlight your unique value proposition to the world."
              className="bg-white text-dark hover:bg-[#FFD183] transition-all duration-300 ease-linear cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-6 w-full md:w-1/3">
            <ForteCard
              title="Edu-tech Platform"
              description="Seeing through your learners' glasses, we shape your edu-tech business idea with its USP's, financials, and growth plans into the next happening thing in town that they'd be excited to join as learners."
              className="hover:bg-[#69E1C6] text-dark bg-white cursor-pointer transition-all duration-300 ease-linear"
            />
            <ForteCard
              title="E-Commerce Platform"
              description="We study everything - target buyers, their pain points, your product, and its direct and indirect benefits. We even play the devil's advocate on occasion. All this to craft a strong sales strategy that wins battles for you."
              className="hover:bg-[#AC80DF] hover:text-dark text-dark bg-white cursor-pointer transition-all duration-300 ease-linear"
            />
          </div>

          <div className="flex flex-col gap-6 w-full md:w-1/3">
            <ForteCard
              title="Digital Marketing"
              description="Robotic arms, FMCG goods, digital apps—whatever your solution area, our tech- and business-savvy wrapper-effect revels in seeing it from all angles. Clients have opined that we helped them see their own products in a new light!"
              className="hover:bg-[#FF7F82] hover:text-white text-dark bg-white cursor-pointer transition-all duration-300 ease-linear"
            />
            <ForteCard
              title="Branding & Collateral Design"
              description="Companies, like people, have their unique identity. At Presentation Monk, we dive under the surface to find the right match of themes, fonts, and colors for you. We do product labels, websites, and office stationery branding."
              className="hover:bg-[#535875] hover:text-white bg-lightBlue transition-all duration-300 ease-linear"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurForteSection;