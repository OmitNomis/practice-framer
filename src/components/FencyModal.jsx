import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import FencyButton from "./FencyButton";

function FencyModal({ isVisible, onClose, initial, animate, transition }) {
  return (
    <div
      onClick={onClose}
      className={
        isVisible
          ? "fixed h-full w-full top-0 left-0 bg-black bg-opacity-60 flex flex-col justify-center items-center"
          : "hidden"
      }
    >
      <motion.div
        initial={{ rotate: 0, scale: 0, opacity: 0 }}
        animate={{ rotate: 360, scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
        className="p-10 h-[50%] w-[70%] bg-[#242424] flex flex-col rounded-lg items-center"
      >
        <p>Hello Everyone!</p>
        <p>This is modal</p>
        <p>Click on the button to close</p>
        <p>Or anywhere outside the Modal {":>"}</p>
        <div className="mt-10">
          <FencyButton onClick={onClose} text="Close" />
        </div>
      </motion.div>
    </div>
  );
}

export default FencyModal;
