import React from "react";
import { motion } from "framer-motion";

function FencyBackdrop({ onClick, children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: [0.5, 0.3, 0.2, 0.1] }}
      onClick={onClick}
      className={
        "fixed h-full w-full top-0 left-0 bg-black bg-opacity-60 flex flex-col justify-center items-center"
      }
    >
      {children}
    </motion.div>
  );
}

export default FencyBackdrop;
