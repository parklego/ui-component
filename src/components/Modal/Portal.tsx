import React from "react";
import ReactDOM from "react-dom";

interface ModalPortalProps {
  children: React.ReactNode;
}

const Portal: React.FC<ModalPortalProps> = ({ children }) => {
  const el = document.getElementById("portal");
  if (!el) {
    throw new Error("Element with id 'portal' does not exist");
  }
  return ReactDOM.createPortal(children, el);
};

export default Portal;
