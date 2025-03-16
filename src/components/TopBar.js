import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMail } from "react-icons/io5";

const TopBar = () => {
  return (
    <div className="h-auto bg-[#FFA808] flex flex-col sm:flex-row items-center justify-center sm:justify-between px-6 sm:px-16 py-2 text-white text-sm">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        <MdOutlineLocalPhone className="text-xl" />
        <a href="tel:+917030878963" className="hover:underline">
          +91 70308 78963
        </a>
        <span className="hidden sm:block">|</span>
        {/* Uncomment for additional phone number */}
        {/* <a href="tel:+919767722793" className="hover:underline">
          +91 97677 22793
        </a> */}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-2 sm:mt-0">
        <IoMail className="text-xl" />
        <a href="mailto:hello@dnwtechsolutions.in" className="hover:underline">
          hello@dnwtechsolutions.in
        </a>
      </div>
    </div>
  );
};

export default TopBar;
