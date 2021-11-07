import React from "react";
import "./Modal.css";
export default function Modal({ active, setActive, children }) {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal_content active" : "modal_content"}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
