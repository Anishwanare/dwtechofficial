import React from 'react'
import { motion } from "framer-motion";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const ForteCard = ({
    title,
    description,
    className,
}) => {
  return (
    <div className={` `}>
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "linear",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className={`relative min-h-[26rem]  w-[90%] shrink-0 overflow-hidden rounded-xl  p-6  ${className}
      `}
    >
      <div className="relative z-10 ">
    
        <a class="  rounded-full">
         <VscWorkspaceTrusted  className="h-10 w-5 text-green-500" />
       
        </a>
        <motion.span
          initial={{ scale: 0.75 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 0.5,
            ease: "linear",
          }}
          className="my-2 block origin-top-left font-mono text-5xl font-black leading-[1.2]"
        >
         {title}
        </motion.span>
        <p>
         {description}
        </p>
      </div>

    </motion.div>
  </div>
  )
}

export default ForteCard