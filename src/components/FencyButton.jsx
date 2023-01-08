import React from "react";
import { motion } from "framer-motion";

function FencyButton({ text }) {
  return (
    <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
      <button className="bg-[#852100] px-10 py-3 rounded-2xl  font-bold">
        {text}
      </button>
    </motion.div>
  );
}

export default FencyButton;
