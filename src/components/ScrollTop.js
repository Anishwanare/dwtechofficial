import React from "react";
import { Link } from 'react-router-dom';
import { AiFillUpSquare } from 'react-icons/ai';

function ScrollTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="fixed bottom-16 right-10 p-4 z-99 ">
       <Link to="/" onClick={scrollToTop}>
    <img
        className="object-contain w-16 h-full"
        src={require("../assets/ScrollTop.png")}
        alt="logo"
      /> 
      </Link>
        {/* <AiFillUpSquare className="h-12 w-12 text-blue-500" /> */}
      
    </div>
  );
}

export default ScrollTop;
