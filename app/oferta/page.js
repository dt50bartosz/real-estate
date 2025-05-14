"use client";
import SearchBar from "@/componet/search-bar/search-bar";
import DisplayProperties from "@/componet/oferta/display-properties";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export default function OfertaPage() {
  const [properties, setProperties] = useState([]);
  const router = useRouter();
  const [h1Title, setH1Title] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HTML}/property/lates-property/`, {
      cache: "no-store",
    });
    const data = await res.json();
    setProperties(data);
  };

  const handleSearch = async (formData) => {
    const query = new URLSearchParams(formData).toString();
    router.push(`/oferta?${query}`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_HTML}/property/search?${query}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch search results");
      return;
    }

    const data = await res.json();
    setProperties(data);
    setH1Title(false);
  };

  return (
    <main className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-6">
      <div className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-sm  text-[var(--color-secondary)]">
          Znajdź swoją idealną nieruchomość
        </h1>
        <p className=" mt-2 text-lg text-[var(--color-accent)]">
          Przeglądaj najnowsze oferty i znajdź miejsce, które pokochasz
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">

        <Suspense>
        <SearchBar onSearch={handleSearch} />
        {h1Title && (
          <h2 className="text-3xl md:text-4xl mt-[3rem] text-center font-semibold text-gray-700">
            Nowo dodane oferty
          </h2>
        )}
        </Suspense>
      </div>

      <div className="sm:w-full md:w-[60%] mt-[5rem] mx-auto">
        <DisplayProperties properties={properties} />
      </div>
    </main>
  );
}
