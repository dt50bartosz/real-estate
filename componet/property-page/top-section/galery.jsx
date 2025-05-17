"use client"
import { ImageOff } from "lucide-react";
import Image from "next/image";
import Modal from "@/componet/modal/modal";
import { cleanPhotoString } from "@/lib/utils";
import { useState } from "react";

const BASE_URL = `${process.env.NEXT_PUBLIC_HTML}`;

export default function Gallery({ photos }) {
 const [openModal,setModal] = useState(false);


  
 
  
  return (
    <>
    <Modal isOpen={openModal} setModal={setModal} images={cleanedPhotos} />
    <div className="w-full md:max-w-[50%] h-full grid grid-cols-6 grid-rows-5 gap-3 cursor-pointer"
    onClick={() => setModal(true)}>
      <div className="col-span-4 row-span-4 relative">
        <Image
          src={cleanedPhotos[0]}  // Dynamically set the first image
          alt="Property Image"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
 
      <div className="col-span-2 row-span-2 relative">
        <Image
          src={ cleanedPhotos[1]}  // Dynamically set the second image
          alt="Property Image"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="col-span-2 row-span-2 relative">
        <Image
          src={cleanedPhotos[2]}  // Dynamically set the third image
          alt="Property Image"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="col-span-1 row-span-1 relative">
        <Image
          src={cleanedPhotos[3]}  // Dynamically set the fourth image
          alt="Property Image"
          fill
          className="object-cover rounded-lg aspect-[4/3]"
        />
      </div>

      <div className="col-span-1 row-span-1 relative">
        <Image
          src={cleanedPhotos[4]}  // Dynamically set the fifth image
          alt="Property Image"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="col-span-1 row-span-1 relative">
        <Image
          src={cleanedPhotos[5]}  // Dynamically set the sixth image
          alt="Property Image"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="col-span-1 row-span-1 relative">
        <Image
          src={cleanedPhotos[6]}  // Dynamically set the seventh image
          alt="Property Image"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="col-span-1 row-span-1 relative">
        <Image
          src={cleanedPhotos[7]}  // Dynamically set the eighth image
          alt="Property Image"
          fill
          className="object-cover rounded-lg aspect-[4/3]"
        />
      </div>

      <div className="col-span-1 row-span-1 relative">
        <div className="absolute z-10 inset-0 flex items-center justify-center">
          <p className="text-[1rem] text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg shadow-md">
            +10 Photos
          </p>
        </div>
        <Image
          src={cleanedPhotos[8]}  // Dynamically set the ninth image
          alt="Property Image"
          fill
          className="object-cover rounded-lg aspect-[4/3]"
        />

        
      </div>
    </div>
    </>
  );
}
