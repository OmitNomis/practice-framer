import React from "react";
import { motion } from "framer-motion";

const FencyCard = ({ data }) => {
  return (
    <motion.div
      // tailwind class for card
      className="card flex flex-col md:flex-row items-center justify-center bg-white rounded-lg shadow-lg p-4 md:p-8"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* card image, left */}
      <motion.img
        src={data.image}
        alt={data.title}
        className="w-32 h-32 md:w-48 md:h-auto md:rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      />
      {/* card content, right */}
      <div className="flex flex-col justify-center items-start p-4 md:p-8">
        <h2 className="text-2xl font-bold text-gray-800">{data.title}</h2>
        <p className="text-gray-600">{data.description}</p>
        <div className="flex items-center mt-4">
          <h3 className="text-xl font-bold text-gray-700 mr-2">{data.price}</h3>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FencyCard;
