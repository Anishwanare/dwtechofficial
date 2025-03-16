import React from "react";
import { Link } from 'react-router-dom';

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
      
    </div>
  );
}

export default ScrollTop;
