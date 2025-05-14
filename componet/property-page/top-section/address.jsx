import { MapPin } from "lucide-react";

export default function Address({town,postCode}) {
  return (
    <div className="flex items-center gap-2">
      <MapPin className="text-[var(--color-accent)] w-5 h-5" />
      <p className="text-sm font-medium text-[var(--color-accent)]">
        {town},<span>{postCode}</span>
      </p>
    </div>
  );
}
