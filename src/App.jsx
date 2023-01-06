import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "./styles";
import "./App.css";

function App() {
  return (
    <div className="h-full flex flex-col items-center p-20">
      <h1 className="text-5xl font-bold">Hello World</h1>
      <div className="mt-10">
        Hi, I am going to try learning framer motion :D
      </div>
      <br />
      <br />
      <p>Fade in thingy</p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-10 w-10 rounded-full bg-black"
      />

      <br />
      <br />
      <p>Animate position</p>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{ duration: 2 }}
        className="h-10 w-10 rounded-full bg-black"
      />

      <br />
      <br />

      <p>Hover and tap Effect</p>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="h-10 w-10 rounded-full bg-black"
      />
    </div>
  );
}

export default App;
