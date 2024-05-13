import { FaArrowRight } from "react-icons/fa6";

function Navbar() {
  return (
    <header class="scrolled z-[99]  shadow-2xl border-b-0 text-dark bg-stone sticky flex w-full h-[14vh]   items-center justify-between flex-wrap  m-auto top-0 ">
      <div class="container mx-auto flex flex-wrap px-14 flex-col md:flex-row items-center justify-center">
        <a class="flex title-font font-medium items-center justify-center text-white mb-4 md:mb-0">
          <img
            className="object-contain w-60 h-full"
            src={require("../assets/D&Wlogo.png")}
            alt="logo"
          />
        </a>
        <nav className=" md:ml-auto gap-5 flex flex-wrap items-center text-lg font-[500]  justify-center">
          <a href="#home" className=" hover:text-yellow-600">
            Home
          </a>
          <a href="#about" className=" hover:text-yellow-600">
            About Us
          </a>
          <a href="#work" className=" hover:text-yellow-600">
            Work
          </a>
          <a href="#services" className=" hover:text-yellow-600">
            Services
          </a>
          <a href="#contact" className=" hover:text-yellow-600">
            Contact Us
          </a>
          <button class="gap-2 flex items-center bg-slate-300 border-0 py-3 px-4 focus:outline-none hover:bg-[#FFA808] hover:text-white rounded-full text-base mt-4 md:mt-0 transition-all duration-300 ease-linear">
            <span className="flex items-center gap-1 h-full w-full ">
              Lets Start <FaArrowRight className="text-xl pt-1" />
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
