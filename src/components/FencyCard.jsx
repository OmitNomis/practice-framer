import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FencyCard = ({ data }) => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <AnimatePresence>
      <motion.div
        className={`relative ${
          isExpanded ? "backdrop-blur flex items-center justify-center" : ""
        }`}
        animate={{
          zIndex: isExpanded ? 100 : 0,
          position: isExpanded ? "fixed" : "relative",
          width: isExpanded ? "100vw" : "initial",
          height: isExpanded ? "100vh" : "initial",
          scale: [0, 0.5, 1, 1.5],
        }}
        initial={{
          position: "realtive",
          width: "initial",
          height: "initial",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <motion.div
          className={`card flex flex-col  items-center justify-center bg-white rounded-lg shadow-lg p-4 md:p-8 max-w-[400px] `}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="">
            <img
              src={data.image}
              alt={data.title}
              className="fit-contain w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          </div>
          <div className="flex  flex-col justify-center items-start p-4 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800">{data.title}</h2>
            <p className="text-gray-600">{data.description}</p>
            <div className="flex items-center mt-4">
              <h3 className="text-xl font-bold text-gray-700 mr-2">
                {data.price}
              </h3>
              <button
                onClick={() => setExpanded(!isExpanded)}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg"
              >
                Expand
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FencyCard;
