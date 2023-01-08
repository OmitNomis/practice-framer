import React, { useState } from "react";
import FencyButton from "../components/FencyButton";
import FencyModal from "../components/FencyModal";

function ModalStuff() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="h-full flex flex-col items-center p-20 pb-40">
      <h1 className="text-5xl font-bold">Modal Stuff</h1>
      <div className="mt-10">
        <FencyButton text={"Open Modal"} onClick={toggleModal} />
      </div>

      <div>
        <FencyModal isVisible={modalVisible} onClose={toggleModal} />
      </div>
    </div>
  );
}

export default ModalStuff;
