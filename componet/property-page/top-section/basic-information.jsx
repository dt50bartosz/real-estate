import { Tag } from "lucide-react";

export default function BasicInformation({ basicInfo }) {
  console.log("Basic", basicInfo);
  const {
    property_id,
    useful_area,
    total_area,
    bedrooms,
    bathrooms,
    floor,
    year_of_construction,
    orientation,
    community,
    ibi,
    property_condition
  } = basicInfo;

  return (
    <div className="hidden md:block xs:hidden min-w-[15rem]">
      <div className="flex flex-col gap-4 p-6 rounded-2xl bg-[var(--color-primary)] shadow-md">
        <div className="flex items-center gap-2">
          <Tag className="w-5 h-5 text-[var(--color-accent)]" />
          <p className="text-base font-semibold text-[var(--color-accent)]">{property_id}</p>
        </div>

        <ul className="mt-2 text-[15px] text-white list-disc list-inside space-y-1 leading-relaxed">
          <li>Powierzchnia użytkowa: {useful_area} m²</li>
          <li>Powierzchnia całkowita: {total_area} m²</li>
          <li>Sypialnie: {bedrooms}</li>
          <li>Łazienki: {bathrooms}</li>
          <li>Piętro: {floor}</li>
          <li>Rok budowy: {year_of_construction}</li>
          <li>Orientacja: {orientation}</li>
          <li>Wspólnota: {community}</li>
          <li>IBI: €{ibi} / rok</li>
          <li>Stan nieruchomości: {property_condition}</li>
        </ul>
      </div>
    </div>
  );
}
