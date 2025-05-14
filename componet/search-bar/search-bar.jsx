"use client";
import { useForm } from "react-hook-form";
import {
  Form as UIForm,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

import Location from "./location";
import Bathrooms from "./bathrooms";
import NumberOfRooms from "./number-of-rooms";
import PriceRange from "./price-range";
import PropertyCondition from "./property-condition";
import PropertyType from "./property-type";
import PropertyIdSearch from "./id";

import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

export default function SearchBar({ onSearch }) {
  const searchParams = useSearchParams();

  const defaultValues = useMemo(() => {
    const entries = searchParams ? Object.fromEntries(searchParams.entries()) : {};
    return {
      property_id: '',
      location: '',
      rooms: '',
      price_min: '',
      price_max: '',
      condition: '',
      type: '',
      bathrooms: '',
      ...entries,
    };
  }, [searchParams]);

  const form = useForm({ defaultValues });

  const onSubmit = (data) => {
    if (typeof onSearch === 'function') {
      onSearch(data); // Send form data up to the parent
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <UIForm {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <PropertyIdSearch form={form} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Location form={form} />
            <NumberOfRooms form={form} />
            <PriceRange form={form} />
            <PropertyCondition form={form} />
            <PropertyType form={form} />
            <Bathrooms form={form} />
          </div>
          <div className="flex justify-center">
            <Button className="bg-[var(--color-primary)]">Szukaj</Button>
          </div>
        </form>
      </UIForm>
    </div>
  );
}
