import { Check } from "lucide-react";

const labelMap = {
  dostep_dla_niepelnosprawnych: "Dostęp dla osób niepełnosprawnych",
  klimatyzacja: "Klimatyzacja",
  winda: "Winda",
  system_bezpieczenstwa: "System bezpieczeństwa",
  przyjazne_zwierzetom: "Przyjazne zwierzętom",
  silownia: "Siłownia",
  wbudowane_szafy: "Wbudowane szafy",
  niezalezna_kuchnia: "Niezależna kuchnia",
  umeblowane: "Umeblowane",
  balkon: "Balkon",
  taras: "Taras",
  prywatny_basen: "Prywatny basen",
  wspolny_basen: "Wspólny basen",
  podgrzewany_basen: "Podgrzewany basen",
  basen_kryty: "Basen kryty",
  wspolne_solarium: "Wspólne solarium",
  ogrod: "Ogród",
  garaz: "Garaż",
  parking_dla_gosci: "Parking dla gości",
  centra_handlowe_w_okolicy: "Centra handlowe w okolicy",
  blisko_morza: "Blisko morza",
  widok_na_morze: "Widok na morze",
  w_centrum: "W centrum"
};


export default function AdditionalInformation({ additionalInformation }) {
  const { items } = additionalInformation;

  // If items is a string, try to parse it
  let parsedItems = [];
  if (typeof items === 'string') {
    try {
      parsedItems = JSON.parse(items) || [];
    } catch (error) {
      console.error("Error parsing JSON string:", error);
    }
  } else if (Array.isArray(items)) {
    // If items is already an array, use it as is
    parsedItems = items;
  } else {
    console.error("Unexpected items format:", items);
  }

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-semibold mb-4 text-[var(--color-accent)]">
        Dodatkowe Informacje
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-6 text-green-700">
        {parsedItems.length > 0 ? (
          parsedItems.map((key, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>{labelMap[key] || key}</span>
            </li>
          ))
        ) : (
          <li>Brak danych do wyświetlenia</li> // Fallback message when items is empty
        )}
      </ul>
    </div>
  );
}
