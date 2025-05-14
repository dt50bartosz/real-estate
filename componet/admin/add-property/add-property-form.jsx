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
  
      // Preparing the form data for submission
      for (const [key, value] of Object.entries(data)) {
        if (key === "photos" && value?.length > 0) {
          Array.from(value).forEach((file) => formData.append("photos", file));
        } else if (Array.isArray(value)) {
          value.forEach((v) => formData.append(`${key}[]`, v));
        } else if (value !== undefined && value !== null) {
          formData.append(key, value);
        }
      }
  
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_HTML}/property/add-property`, {
        // Your options here
    
      
        method: "POST",
        body: formData,
        credentials: "include",  // ⬅️ this is required to send cookies!
      });
      
      
      console.log("respoenio",response);

      if (!response.ok) {
        const result = await response.json();
        console.log(result);
        if (result.error === "title") {
          setTitleError("Tytuł jest już użyty");
          setIdError(""); // Clear other errors
        } else if (result.error === "id") {
          setIdError("ID jest zajęte");
          setTitleError(""); // Clear other errors
        } else {
          setTitleError(""); // Clear errors
          setIdError(""); // Clear errors
        }
      } else {
        const result = await response.json();
        setSuccessMessage(result.message); // Display success message
        // Optionally, clear the form here if you want to reset the form after submission
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setTitleError("");
      setIdError(""); // Clear other errors
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
