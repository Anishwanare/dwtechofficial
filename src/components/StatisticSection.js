import React from "react";

function StatisticSection() {
  return (
    <div id="services" className="mt-9">
      <h1 class="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
        Our Service <br class="md:block hidden" />
      </h1>
      <div class="md:mt-7 mt-2 relative sm:flex items-center justify-center">
        <img
          src={require("../assets/bg8.png")}
          alt="world map image"
          class="w-full max-h-screen object-cover  sm:block hidden"
        />
        <img
          src={require("../assets/bg8.png")}
          alt="mobile-image"
          class="sm:hidden -mt-10 block w-full h-80 object-cover absolute z-0"
        />

        <div class="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
          <p class="text-3xl font-semibold text-gray-800">5+</p>
          <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Projects</p>
        </div>
        <div class="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
          <p class="text-3xl font-semibold text-gray-800">1100+</p>
          <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Hours</p>
        </div>
        <div class="shadow-lg xl:p-6 p-4  sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
          <p class="text-3xl font-semibold text-gray-800">12+</p>
          <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
            Indian Cities Footprint
          </p>
        </div>
        <div class="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
          <p class="text-3xl font-semibold text-gray-800">5+</p>
          <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
            Service Domains
          </p>
        </div>
      </div>
    </div>
  );
}

export default StatisticSection;
