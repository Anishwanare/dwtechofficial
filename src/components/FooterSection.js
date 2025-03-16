import React from "react";

function FooterSection() {
  return (
    <footer id="contact" className="text-gray-400 bg-gradient-to-t from-gray-900 to-gray-700 body-font">
      <div className="container px-6 py-12 mx-auto flex flex-col md:flex-row md:items-start md:justify-between">
        {/* Left Section */}
        <div className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-white text-2xl font-medium mb-4">Vision & Mission</h2>
          <p className="text-gray-400">
            Our vision is to realize a world in which empathy is the means, understanding is the norm, and synergy is the outcome.
          </p>
          <p className="text-gray-400 mt-4">
            Our mission is to leverage our multi-modal service offerings to empower anyone who wishes to effectively convey a strong, noble message.
          </p>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/4 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-white text-2xl font-medium mb-4">Contact Us</h2>
          <ul className="text-gray-400 space-y-3">
            <li className="flex items-center justify-center md:justify-start">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span>+91 70308 78963</span>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20l-3 -3h-2a3 3 0 01-3 -3v-6a3 3 0 013 -3h10a3 3 0 013 3v6a3 3 0 01-3 3h-2l-3 3" />
              </svg>
              <span>hello@dnwtechsolutions.in</span>
            </li>
            <li className="flex items-start justify-center md:justify-start">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Gadge Nagar, Amravati, Maharashtra, India - 444808</span>
            </li>
          </ul>
        </div>

        {/* Navigation Section */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h2 className="text-white text-2xl font-medium mb-4">Navigation</h2>
          <nav className="text-gray-400 space-y-2">
            <a href="#" className="block hover:text-white">Home</a>
            <a href="#" className="block hover:text-white">About Us</a>
            <a href="#" className="block hover:text-white">Our Services</a>
            <a href="#" className="block hover:text-white">Contact Us</a>
          </nav>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="bg-gray-800 py-4 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} D&W Tech. All rights reserved.
          </p>
          {/* <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-yellow-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
