"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import photo1 from "@/public/index.jpg";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { MapPin, Tag, Bed, Bath, Square } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { slugify } from "@/lib/utils";
import { convertToTowns } from "@/lib/utils";

export default function PropertyCard({ property }) {

 
  
  const {
    property_type = "Mieszkanie",
    title = "No title",
    price = "N/A",
    town = "Unknown",
    property_id = "DefaultTag",
    bedrooms = 0,
    bathrooms = 0,
    useful_area = "0m²",
    photos = ''
  } = property;

  //const parsed = JSON.parse(photos);
 // const firstPhoto = `${process.env.NEXT_PUBLIC_HTML}` + parsed[0];
  console.log("phots",photos);


  const [shortTitle, setShortTitle] = useState(title);

  useEffect(() => {
    if (title.length > 30) {
      setShortTitle(title.slice(0, 30) + "...");
    } else {
      setShortTitle(title);
    }
  }, [title]);

  


  return (
    <Link href={`property/${slugify(title)}`}>
    <Card className="w-full max-w-lg overflow-hidden border border-gray-300 rounded-xl transform transition-all hover:shadow-[0_0_15px_4px_var(--color-primary)]">

      <CardContent className="flex py-0 gap-4 relative min-h-[20vh]">
        <Image
          src={photo1}
          alt="Property Image"
          layout="fill"
          className="object-cover rounded-tl-xl rounded-tr-xl"
        />
        <div className="absolute top-5 left-5 z-10 bg-[var(--color-secondary)] p-2">
          <p className="text-white text-sm">
            {property_type.charAt(0).toUpperCase() + property_type.slice(1)}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col justify-between">
          <h2 className="text-lg font-semibold text-gray-800">{shortTitle}</h2>
          <p className="text-[1.5rem] mt-3 text-[var(--color-accent)]">{price}€</p>
          <div className="flex items-center">
            <MapPin className="text-[1rem] mr-2 text-indigo-600" />
            <p className="mb-2 mt-2 text-base font-medium text-indigo-600">{convertToTowns(town)}</p>
          </div>
          <div className="flex items-center mb-3 gap-3 sm:w-full sm:mx-auto">
            <Tag className="text-[0.5rem] text-indigo-600" />
            <p className="text-[0.8rem] md:text-[0.5rem] xl:text-[0.8rem]">{property_id}</p>
            <Separator orientation="vertical" className="w-[3px] bg-black" style={{ height: "15px" }} />
            <div className="flex items-center gap-2">
              <Bed className="text-[0.5rem] text-indigo-600" />
              <p className="text-[0.8rem] md:text-[0.5rem] xl:text-[0.8rem]">{bedrooms}</p>
              <Separator orientation="vertical" className="w-[3px] bg-black" style={{ height: "15px" }} />
              <Bath className="text-[0.5rem] text-indigo-600" />
              <p className="text-[0.8rem] md:text-[0.5rem] xl:text-[0.8rem]">{bathrooms}</p>
              <Separator orientation="vertical" className="w-[3px] bg-black" style={{ height: "15px" }} />
              <Square className="text-[0.5rem] text-indigo-600" />
              <p className="text-[0.8rem] md:text-[0.5rem] xl:text-[0.8rem]">{useful_area}m²</p>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
    </Link>
  );
}
