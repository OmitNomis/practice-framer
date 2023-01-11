import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
let x = 10;
function StaggerList() {
  const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [lastChangedIndex, setLastChangedIndex] = useState(null);
  const addItem = () => {
    x++;
    setList((items) => [...items, x]);
  };

  const removeItem = (item) => {
    setLastChangedIndex(list.indexOf(item));
    setList(list.filter((i) => i !== item));
  };

  let animatingList = list.slice(lastChangedIndex);
  return (
    <div className=" h-full flex flex-col items-center p-10 pb-40 fixed overflow-y-scroll w-full ">
      <a className="self-start " href="/">
        <p>{"< Back"}</p>
      </a>
      <p>Try removing stuff from the list and look at the stagger animation</p>
      <div>Could be a bit buggy sometimes, but it works for the most part</div>
      <br />
      <div className="flex flex-col max-w-md w-full">
        <div>
          <button
            onClick={addItem}
            className="border-white border-[2px] px-4 py-2"
          >
            Add
          </button>
        </div>
        <div className="mt-5">
          <ul className="list-disc">
            <AnimatePresence initial={false} mode="popLayout">
              {list.map((item) => (
                <motion.li
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    opacity: { duration: 0.2 },
                    layout: {
                      duration: animatingList.indexOf(item) * 0.4,
                      type: "spring",
                      bounce: 0.4,
                    },
                  }}
                  key={item}
                  className="flex justify-between pb-2"
                >
                  <span>Item {item}</span>
                  <button
                    onClick={() => removeItem(item)}
                    className="border-white border-[1px] p-1"
                  >
                    &#x274C;
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StaggerList;
