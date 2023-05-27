import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

export default function ModalPage() {
  // Using usestate method to set the default as showmodal hidden
  const [showModal, setShowModal] = useState(false);


//   Creating a function handleOnClick
const handleOnClick = ()=>{
    setShowModal(true)
};

// Creating a closehandle function to close the modal and passing it to the modal component so we can use it there.
const closeHandle = ()=>{
    setShowModal(false)
}

  return <div>
    <Button onClick={handleOnClick} primary>Show Modal</Button>
    {showModal && <Modal closeHandle={closeHandle}>Here you will type your Text for the modal.</Modal>}
  </div>;
}
