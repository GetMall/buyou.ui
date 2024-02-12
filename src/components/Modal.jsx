import React, { useEffect } from "react";

function Modal({ children }) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div
      className="flex z-50 bg-black bg-opacity-30 top-0 justify-center absolute"
      style={{ height: "200%", width: "100%", zIndex: "9999" }}
    >
      <div
        className="bg-white rounded-md h-1/3 items-center mt-24 w-1/3 justify-center"
        style={{ width: "40%" }}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
