import { useState, useEffect } from "react";
import Image from "next/image";
import { StepBack, StepForward } from "lucide-react";

const Modal = ({ isOpen, setModal, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setCurrentIndex(0); // Reset to first image on open
  }, [isOpen]);

  const changeImage = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  if (!isOpen || !images?.length) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative text-gray-100 p-4 sm:p-6 rounded-lg w-[90vw] sm:max-w-2xl md:max-w-3xl xl:max-w-[80%] max-h-[90vh] h-[80vh] shadow-2xl flex flex-col">
        
        {/* Image Container */}
        <div className="relative w-full h-full rounded overflow-hidden">
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            fill
            className="object-contain" // or use "object-cover" for a cropped layout
           
          />
        </div>

        {/* Arrows */}
        <div className="absolute inset-0 flex justify-between items-center px-2 sm:px-4">
          <button
            onClick={() => changeImage(-1)}
            className="p-2 bg-gray-600 bg-opacity-70 hover:bg-opacity-90 text-white rounded-full"
          >
            <StepBack />
          </button>
          <button
            onClick={() => changeImage(1)}
            className="p-2 bg-gray-600 bg-opacity-70 hover:bg-opacity-90 text-white rounded-full"
          >
            <StepForward />
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setModal(false)}
          className="absolute top-2 right-3 text-3xl text-gray-300 hover:text-white"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
