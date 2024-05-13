import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMail } from "react-icons/io5";

const TopBar = () => {
  return (
    <div className="h-[6vh] bg-[#FFA808] flex items-center px-16">
      <div>
        <span className="flex gap-2 text-white">
          <MdOutlineLocalPhone className="text-2xl " />
          <a href="tel:+917030878963">+917030878963</a>
          <p>/</p>
          <a href="tel:+919767722793">+919767722793</a>
          <p className="mx-6">|</p>
          <IoMail className=" text-2xl " />
          <a href="mailto:hello@dnwtechsolutions.in">
            hello@dnwtechsolutions.in
          </a>
        </span>
      </div>
    </div>
  );
};

export default TopBar;
