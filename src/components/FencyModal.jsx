import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FencyButton from "./FencyButton";
import FencyBackdrop from "./FencyBackdrop";

function FencyModal({ isVisible, onClose, animationStyle }) {
  let pageVariants = {
    hidden: {},
    visible: {},
    exit: {},
  };

  switch (animationStyle) {
    case "fade":
      pageVariants.hidden = { opacity: 0 };
      pageVariants.visible = { opacity: 1 };
      pageVariants.exit = { opacity: 0 };
      break;

    case "slide left-right":
      pageVariants.hidden = { x: "-100vw", opacity: 0 };
      pageVariants.visible = { x: "0", opacity: 1 };
      pageVariants.exit = { x: "100vw", opacity: 0 };
      break;

    case "slide top-bottom":
      pageVariants.hidden = { y: "-100vh", opacity: 0 };
      pageVariants.visible = { y: "0", opacity: 1 };
      pageVariants.exit = { y: "100vh", opacity: 0 };
      break;

    case "scale":
      pageVariants.hidden = { scale: 0, opacity: 0 };
      pageVariants.visible = {
        scale: 1,
        opacity: 1,
        transition: { type: "spring", duration: 1 },
      };
      pageVariants.exit = { scale: 0, opacity: 0 };
      break;

    case "rotate":
      pageVariants.hidden = { scale: 0, opacity: 0, rotate: 0 };
      pageVariants.visible = {
        scale: 1,
        opacity: 1,
        rotate: 360,
        transition: { type: "spring", duration: 1 },
      };
      pageVariants.exit = {
        scale: 0,
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.5 },
      };
      break;

    case "flip":
      pageVariants.hidden = { opacity: 0, rotateY: -180, scale: 0 };
      pageVariants.visible = {
        opacity: 1,
        rotateY: 0,
        scale: 1,
        transition: { duration: 0.5 },
      };
      pageVariants.exit = {
        opacity: 0,
        rotateY: 180,
        transition: { duration: 0.5 },
        scale: 0,
      };
      break;

    case "flip-slide-y":
      pageVariants.hidden = { opacity: 0, y: "-100vh", rotateX: -720 };
      pageVariants.visible = {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.5 },
      };
      pageVariants.exit = {
        opacity: 0,
        rotateX: 720,
        transition: 0.5,
        y: "100vh",
        transition: { duration: 0.5 },
      };
      break;
    case "flip-slide-x":
      pageVariants.hidden = { opacity: 0, x: "-100vw", rotateY: -720 };
      pageVariants.visible = {
        opacity: 1,
        x: "0",
        rotateY: 0,
        transition: { duration: 0.5 },
      };
      pageVariants.exit = {
        opacity: 0,
        rotateY: 720,
        transition: 0.5,
        x: "100vw",
        transition: { duration: 0.5 },
      };
      break;

    default:
      break;
  }
  console.log(pageVariants);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isVisible && (
        <FencyBackdrop onClick={onClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="p-10 bg-[#242424] flex flex-col rounded-lg items-center"
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
