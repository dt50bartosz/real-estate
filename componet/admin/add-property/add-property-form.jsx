"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PropertyInformation from "./property-information";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import PropertyLocation from "./add-propertry-location";
import AddPhotos from "./add-photos";
import Description from "./add-description";
import SellerInformation from "./add-seller-information";
import ExtraInformation from "./add-extra-informatio";
import { useState } from "react";

const propertySchema = z.object({
  propertyId: z.string().optional(),
  title: z.string().min(1, "Tytuł jest wymagany"),
  orientation: z.string().optional(),
  propertyType: z.string().min(1, "Typ nieruchomości jest wymagany"),
  propertyCondition: z.string().min(1, "Stan nieruchomości jest wymagany"),
  usefulArea: z.coerce.number().nonnegative().optional(),
  totalArea: z.coerce.number().nonnegative().optional(),
  bedrooms: z.coerce.number().int().nonnegative().optional(),
  bathrooms: z.coerce.number().int().nonnegative().optional(),
  floor: z.coerce.number().int().nonnegative().optional(),
  yearOfConstruction: z.coerce.number().int().nonnegative().optional(),
  price: z.coerce.number().nonnegative(),
  ibi: z.coerce.number().nonnegative().optional(),
  community: z.coerce.number().nonnegative().optional(),
  photos: z
    .any()
    .refine((files) => files?.length > 0, "At least one photo is required.")
    .refine(
      (files) => Array.from(files)?.every((file) => file?.type === "image/jpeg"),
      "Only .jpeg files are allowed."
    ).optional(),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." }),
  // Location fields
  town: z.string().min(1, "Miasto jest wymagane"),
  postalCode: z.string().min(1, "Kod pocztowy jest wymagany"),
  street: z.string().min(1, "Ulica jest wymagana"),
  latitude: z
    .coerce.number()
    .refine((val) => !isNaN(val), {
      message: "Szerokość geograficzna musi być liczbą",
    })
    .optional(),
  longitude: z
    .coerce.number()
    .refine((val) => !isNaN(val), {
      message: "Długość geograficzna musi być liczbą",
    })
    .optional(),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  sellerName: z.string(),
  telephone: z.coerce.number(),
});

export default function AddPropertyForm() {
  const form = useForm({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      propertyId: "",
      title: "",
      orientation: "",
      propertyType: "",
      propertyCondition: "",
      usefulArea: "",
      totalArea: "",
      bedrooms: "",
      bathrooms: "",
      floor: "",
      yearOfConstruction: "",
      price: "",
      ibi: "",
      community: "",
      photos: [],
      description: "",
      town: "",
      postalCode: "",
      street: "",
      latitude: "",
      longitude: "",
      items: [],
      sellerName: "",
      telephone: "",
    },
  });

  const [successMessage,setSuccessMessage] = useState("")
  const [titleError,setTitleError] = useState("");
  const [idError,setIdError] = useState("");
 
  const { handleSubmit } = form;

const onSubmit = async (data) => {
  try {
    const formData = new FormData();


 
    for (const file of data.photos) {  // Iterate over FileList or array
      formData.append("photos", file);
    }
   
  

    // Append other fields (skip 'photos' since handled)
    for (const key in data) {
      if (key === "photos") continue;

      const value = data[key];

      if (Array.isArray(value)) {
        value.forEach((item) => {
          formData.append(`${key}[]`, String(item));
        });
      } else if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    }

    // Send the request
    const response = await fetch("/api/properties/add", {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    const result = await response.json();

    if (!response.ok) {
      if (result.error === "title") {
        setTitleError("Tytuł jest już użyty");
        setIdError("");
      } else if (result.error === "id") {
        setIdError("ID jest zajęte");
        setTitleError("");
      } else {
        setTitleError("");
        setIdError("");
      }
    } else {
      setSuccessMessage(result.message);
      // Optionally reset your form here
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    setTitleError("");
    setIdError("");
  }
};




  
  return (
    <div className="w-full md:w-[50%] mx-auto shadow-xl rounded-lg">
      <Form {...form}>
        <form className="p-8 space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <PropertyInformation form={form} />
          <PropertyLocation form={form} />
          <Description form={form} />
          <ExtraInformation form={form} />
          <SellerInformation form={form} />
          <AddPhotos form={form} />
          <p className="text-red-500 text-center">{titleError}</p>
          <p className="text-red-500 text-center">{idError}</p>
          <p className="text-green-500 text-center">{successMessage}</p>

          <Button type="submit" className="w-full">Dodaj nieruchomość</Button>
        </form>
      </Form>
    </div>
  );
}
