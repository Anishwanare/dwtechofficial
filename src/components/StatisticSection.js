import React from "react";
import bgImage from "../assets/bg8.png";

function StatisticSection() {
  return (
    <div id="services" className="mt-9 px-4 sm:px-8">
      {/* Title */}
      <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-yellow-500">
        Our Services
      </h1>

      {/* Background Image */}
      <div className="relative mt-5 flex justify-center">
        <img
          src={bgImage}
          alt="World map background"
          className="w-full max-h-screen object-cover hidden sm:block"
        />
        <img
          src={bgImage}
          alt="Mobile background"
          className="sm:hidden block w-full h-80 object-cover absolute z-0"
        />
      </div>

      {/* Statistics */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10 sm:mt-14">
        {/* Projects Completed */}
        <div className="shadow-lg p-6 bg-white rounded-lg flex flex-col items-center z-20">
          <p className="text-4xl font-semibold text-gray-800">20+</p>
          <p className="text-base text-gray-600 mt-2">Projects Completed</p>
        </div>

        {/* Hours of Work */}
        <div className="shadow-lg p-6 bg-white rounded-lg flex flex-col items-center z-20">
          <p className="text-4xl font-semibold text-gray-800">1100+</p>
          <p className="text-base text-gray-600 mt-2">Development Hours</p>
        </div>

        {/* Indian Cities Footprint */}
        <div className="shadow-lg p-6 bg-white rounded-lg flex flex-col items-center z-20">
          <p className="text-4xl font-semibold text-gray-800">4+</p>
          <p className="text-base text-gray-600 mt-2">Cities Across India</p>
        </div>

        {/* Service Domains */}
        <div className="shadow-lg p-6 bg-white rounded-lg flex flex-col items-center z-20">
          <p className="text-4xl font-semibold text-gray-800">5+</p>
          <p className="text-base text-gray-600 mt-2">Service Domains</p>
        </div>

        {/* Indian Market Expansion */}
        <div className="shadow-lg p-6 bg-white rounded-lg flex flex-col items-center z-20">
          <p className="text-4xl font-semibold text-gray-800">100+</p>
          <p className="text-base text-gray-600 mt-2">Indian Businesses Served</p>
        </div>

      </div>
    </div>
  );
}

export default StatisticSection;
