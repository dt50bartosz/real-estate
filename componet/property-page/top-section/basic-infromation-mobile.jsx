import { Tag } from "lucide-react";

export default function BasicInformationMobile({ basicInfo }) {
  const {
    useful_area,
    total_area,
    bedrooms,
    bathrooms,
    floor,
    year_of_construction,
    orientation,
  } = basicInfo;

  return (
    <div className="md:hidden mt-[3rem] xs:hidden min-w-[15rem]">
      <div className="flex flex-col gap-4 p-6 rounded-2xl bg-[var(--color-primary)] shadow-md">
        <div className="flex items-center gap-2">
          <Tag className="w-5 h-5 text-[var(--color-accent)]" />
          <p className="text-base font-semibold text-[var(--color-accent)]">VIKI:7356</p>
        </div>

        <ul className="mt-2 text-[15px] text-white list-disc list-inside space-y-1 leading-relaxed">
          <li>Usable Area: {useful_area} m²</li>
          <li>Total Area: {total_area} m²</li>
          <li>Bedrooms: {bedrooms}</li>
          <li>Bathrooms: {bathrooms}</li>
          <li>Floor: {floor}th</li>
          <li>Year of Construction: {year_of_construction}</li>
          <li>Orientation: {orientation}</li>
        </ul>
      </div>
    </div>
  );
}
