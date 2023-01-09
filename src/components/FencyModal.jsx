import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FencyButton from "./FencyButton";
import FencyBackdrop from "./FencyBackdrop";

function FencyModal({ isVisible, onClose, animationStyle }) {
  let dropIn = {
    hidden: {},
    visible: {},
    exit: {},
  };

  switch (animationStyle) {
    case "fade":
      dropIn.hidden = { opacity: 0 };
      dropIn.visible = { opacity: 1 };
      dropIn.exit = { opacity: 0 };
      break;

    case "slide left-right":
      dropIn.hidden = { x: "-100vw", opacity: 0 };
      dropIn.visible = { x: "0", opacity: 1 };
      dropIn.exit = { x: "100vw", opacity: 0 };
      break;

    case "scale":
      dropIn.hidden = { scale: 0, opacity: 0 };
      dropIn.visible = {
        scale: 1,
        opacity: 1,
        transition: { type: "spring", duration: 1 },
      };
      dropIn.exit = { scale: 0, opacity: 0 };
      break;

    case "rotate":
      dropIn.hidden = { scale: 0, opacity: 0, rotate: 0 };
      dropIn.visible = {
        scale: 1,
        opacity: 1,
        rotate: 360,
        transition: { type: "spring", duration: 1 },
      };
      dropIn.exit = {
        scale: 0,
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.5 },
      };
      break;

    default:
      break;
  }
  console.log(dropIn);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isVisible && (
        <FencyBackdrop onClick={onClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
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
        </FencyBackdrop>
      )}
    </AnimatePresence>
  );
}

export default FencyModal;
