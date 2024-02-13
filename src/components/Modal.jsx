import React, { useEffect } from "react";
import closeIcon from "../assets/plataforma/icons/icon-close.svg";
import "./Modal.css";

function Modal({ children, onClick }) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div
      className="fixed z-50 bg-black bg-opacity-30 top-0 justify-center"
      style={{ height: "200%", width: "100%", zIndex: "9999" }}
    >
      <div
        className="bg-white rounded-md h-1/3 items-center mt-24 w-1/3 justify-center"
        style={{ width: "40%", marginLeft:"30%", animation: 'slideIn 0.5s forwards' }}
      >
        <div onClick={onClick} className="flex cursor-pointer" style={{marginLeft: "92%"}}>
          <img className="w-7 mt-2" src={closeIcon}></img>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
