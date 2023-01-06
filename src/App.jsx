import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "./styles";
import "./App.css";

function App() {
  return (
    <div className="h-full flex flex-col items-center p-20 pb-40">
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
        className={styles.blackBall}
      />

      <br />
      <br />
      <p>Animate position</p>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{ duration: 2 }}
        className={styles.blackBall}
      />

      <br />
      <br />

      <p>Animate Position, left right</p>

      <motion.div
        className={styles.blackBall}
        initial={{ x: -100 }}
        animate={{
          x: [-100, 0, 100, 0, -100],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <br />
      <br />

      <p>HEHEHEHEH</p>
      <br />
      <br />

      <p>Let's experiment more</p>
      <p>kinda pendulum-ish lol</p>
      <br />

      <motion.div
        className={styles.blackBall}
        initial={{ x: -100 }}
        animate={{
          x: [-100, 100, -100],
          y: [
            0, 4, 8, 12, 16, 20, 16, 12, 8, 4, 0, 0, 4, 8, 12, 16, 20, 16, 12,
            8, 4, 0,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <br />
      <br />

      <p>Hover and tap Effect</p>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={styles.blackBall}
      />

      <br />
      <br />

      <p>HOver, Tap and Drag</p>
      <motion.div
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.8 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        className={styles.blackBall}
      />

      <br />
      <br />

      <p>Cool Drag</p>
      <div className="h-40 w-40 mt-10 bg-gray-600 rounded-lg flex items-center justify-center ">
        <motion.div
          className={styles.blackBall}
          drag
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          dragConstraints={{ left: -70, right: 70, top: -70, bottom: 70 }}
          dragElastic={0.5}
          dragMomentum={false}
        />
      </div>

      <br />
      <br />

      <p>Cool Spnny Loading kinda thingy, very Cool: copied hehe</p>
      <motion.div
        className={`${styles.blackBall} mt-10`}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
}

export default App;
