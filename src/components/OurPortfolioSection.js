import React, { useState } from "react";
import { Link } from "react-router-dom";

const clientProjects = [
  {
    title: "E-Commerce Website",
    image: "https://i0.wp.com/themes.svn.wordpress.org/shopper-ecommerce/5.0/screenshot.png?w=post-thumbnail&strip=all", 
    link: "#",
  },
  {
    title: "Edu-Tech Platform",
    image: "edutech.png",
    link: "#",
  },
  {
    title: "Digital Marketing Site",
    image: "https://static.vecteezy.com/system/resources/previews/000/689/042/non_2x/digital-marketing-concept-for-banner-and-website-landing-page-vector.jpg",
    link: "#",
  },
  {
    title: "Portfolio Website",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSF2F5nNKnkFm3hTsfRocVXE5FJWBzDZOyg&s",
    link: "#",
  },
];

const PortfolioSection = () => {
  return (
    <section id="work" className="py-12 bg-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-yellow-500">OUR PORTFOLIO</h1>
        <p className="mt-4 text-xl text-slate-800 font-medium">
          Take A Look At Our Latest Work
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {clientProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-lg">{project.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;