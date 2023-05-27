import React, { useEffect } from "react";
import ReactDom from "react-dom";
import Button from "./Button";

export default function Modal({ children , closeHandle }) {

    useEffect(()=>{
        document.body.style.overflow = "hidden"

        return ()=>{
            document.body.style.overflow = "scroll"
        }
    },[])

  return ReactDom.createPortal(
    <div>
      <div onClick={closeHandle} className="fixed inset-0 bg-gray-300 opacity-80"></div>
      <div className="fixed inset-40 bg-zinc-50 px-5 py-5">
        <div className="flex flex-col justify-between h-full">
          {children}

          <div className="flex justify-end">
            <Button onClick={closeHandle} primary>Accept</Button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".Modal")
  );
}
