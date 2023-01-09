import React from "react";
import { motion } from "framer-motion";

function FencyRadio({ text, onClick, selected }) {
  return (
    <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
      <button
        onClick={onClick}
        className={`${
          selected ? "border-[#852100] border-[3px]" : ""
        } px-10 py-3 rounded-2xl  font-bold bg-neutral-700 my-3 `}
      >
        {text}
      </button>
    </motion.div>
  );
}

export default FencyRadio;
