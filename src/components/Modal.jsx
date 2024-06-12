import { useEffect } from "react";
import { CloseIcon } from "../assets";
import { Container } from "./Container";

export const Modal = ({ children, toggleModal }) => {
  useEffect(() => {
    // Disable scroll while modal is open.
    const body = document.querySelector("body");
    body.classList.add("overflow-hidden");
    return () => body.classList.remove("overflow-hidden");
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <Container className="relative max-w-lg p-8 mx-auto bg-white rounded shadow-lg">
        <CloseIcon
          className="absolute text-yellow-600 cursor-pointer size-6 top-2 right-2"
          onClick={toggleModal}
        />
        {children}
      </Container>
    </div>
  );
};
