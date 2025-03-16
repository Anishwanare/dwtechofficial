import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setShowModal(false);
    }, [1000])
    toast.success("Thank you! Our Team will contact you in 24 hours")
    setFormData({ name: "", email: "", phone: "", service: "" })
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }

  }, [showModal])

  return (
    <>
      {/* Navbar */}
      <header className="scrolled z-[40] shadow-2xl border-b-0 text-dark bg-stone sticky flex w-full h-[14vh] items-center justify-between flex-wrap m-auto top-0">
        <div className="container mx-auto flex flex-wrap px-6 md:px-14 flex-col md:flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center text-white">
            <img className="object-contain w-40 md:w-60 h-full" src={require("../assets/image.png")} alt="logo" />
          </a>

          {/* Hamburger Button */}
          <button className="md:hidden text-3xl text-dark focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation Links */}
          <nav
            className={`absolute md:static bg-stone md:bg-transparent top-[14vh] left-0 w-full md:w-auto flex flex-col md:flex-row items-center text-lg font-[500] md:gap-5 transition-all duration-300 ${isOpen ? "block" : "hidden"
              } md:flex`}
          >
            <a href="#home" className="hover:text-yellow-600 py-2 md:py-0">Home</a>
            <a href="#about" className="hover:text-yellow-600 py-2 md:py-0">About Us</a>
            <a href="#work" className="hover:text-yellow-600 py-2 md:py-0">Work</a>
            <a href="#services" className="hover:text-yellow-600 py-2 md:py-0">Services</a>
            <a href="#contact" className="hover:text-yellow-600 py-2 md:py-0">Contact Us</a>

            {/* Let's Start Button */}
            <button
              onClick={() => setShowModal(true)}
              className="gap-2 flex items-center bg-slate-300 border-0 py-3 px-4 focus:outline-none hover:bg-[#FFA808] hover:text-white rounded-full text-base mt-4 md:mt-0 transition-all duration-300 ease-linear"
            >
              <span className="flex items-center gap-1 h-full w-full">
                Let's Start <FaArrowRight className="text-xl pt-1" />
              </span>
            </button>
          </nav>
        </div>
      </header>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-[90%] md:w-[40%] relative">
            <button className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-red-500" onClick={() => setShowModal(false)}>
              <FaTimes />
            </button>
            <h2 className="text-2xl font-semibold text-center mb-5">Contact Us</h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              >
                <option value="" disabled>Select a Service</option>
                <option value="Web Development">Web Development</option>
                <option value="SEO Optimization">SEO Optimization</option>
                <option value="Social Media Management">Social Media Management</option>
                <option value="Branding & Design">Branding & Design</option>
                <option value="E-commerce Solutions">E-commerce Solutions</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Email Marketing">Email Marketing</option>
                <option value="Video Editing & Production">Video Editing & Production</option>
              </select>


              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
