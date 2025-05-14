"use client";

import TopSection from "@/componet/property-page/top-section/top-section";
import MiddleSection from "@/componet/property-page/middle-section/middle-section";
import dynamic from 'next/dynamic';

const MapSection = dynamic(() => import("@/componet/Map/Map.js"), {
  ssr: false
});

export default function PropertyPage({topSection,middleSection,location}) {
  
  
  return (
    <main className="md:w-[70%] mx-auto flex flex-col items-center justify-center">
      <div className="h-[60vh] w-full">
        <TopSection topSection={topSection} />
      </div>

      <div className="mt-6 mb-7 w-full">
        <MiddleSection middleSection={middleSection} />
      </div>

      <h4 className="text-3xl text-[var(--color-secondary)] font-semibold mb-4 text-center">Lokalizacja</h4>

      <div className="w-full p-6 mb-10 shadow-xl rounded-xl">
        <MapSection location = {location} />
      </div>
    </main>
  );
}
