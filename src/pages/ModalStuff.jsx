import React from "react";
import FencyButton from "../components/FencyButton";

function ModalStuff() {
  return (
    <div className="h-full flex flex-col items-center p-20 pb-40">
      <h1 className="text-5xl font-bold">Modal Stuff</h1>
      <div className="mt-10">
        <FencyButton text={"Hello"} />
      </div>
    </div>
  );
}

export default ModalStuff;
