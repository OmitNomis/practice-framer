import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-full flex flex-col items-center p-20">
      <h1 className="text-5xl font-bold">Hello World</h1>
      <div className="mt-10">
        Hi, I am going to try learning framer motion :D
      </div>
      <div className="mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-10 w-10 rounded-full bg-black"
        />
      </div>
    </div>
  );
}

export default App;
