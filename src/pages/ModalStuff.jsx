import React, { useState } from "react";
import FencyButton from "../components/FencyButton";
import FencyModal from "../components/FencyModal";
import FencyRadio from "../components/FencyRadio";

function ModalStuff() {
  const [modalVisible, setModalVisible] = useState(false);
  const [animationStyle, setanimationStyle] = useState("fade");
  let animateStyles = ["fade", "slide", "scale", "rotate"];

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="h-full flex flex-col items-center p-20 pb-40">
      <h1 className="text-5xl font-bold">Modal Stuff</h1>
      <div>
        <br />
        <p>Select Style</p>
        <br />
        <div className="flex items-center">
          {animateStyles.map((style) => (
            <div key={style} className={` mx-3 rounded-lg`}>
              <FencyRadio
                onClick={() => setanimationStyle(style)}
                text={style}
                selected={animationStyle === style ? true : false}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <FencyButton text={"Open Modal"} onClick={toggleModal} />
      </div>

      <FencyModal
        isVisible={modalVisible}
        onClose={toggleModal}
        animationStyle={animationStyle}
      />
    </div>
  );
}

export default ModalStuff;
