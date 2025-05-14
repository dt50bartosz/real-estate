import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"; // Assuming you have these components

export default function PropertyLocation({ form }) {
  const towns = [
    "Torrevieja", "La Mata", "Guardamar del Segura", "Orihuela Costa", "Villamartin", "Los Alcazares",
    "Campoamor", "Punta Prima", "Almoradi", "Callosa de Segura", "Benejuzar", "Dolores", "San Fulgencio",
    "Los Montesinos", "Benijofar", "Torre de la Horca", "La Zenia", "Florida", "El Che", "Las Colinas", "Orihuela"
  ];
  
  // Sort towns alphabetically
  const sortedTowns = towns.sort();

  return (
    <div className="space-y-8">
      {/* --- Informacje o lokalizacji --- */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Informacje o lokalizacji</h3>

        {/* Town field changed to select */}
        <FormField
          control={form.control}
          name="town"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Miasto</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Wybierz miasto" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortedTowns.map((town) => (
                      <SelectItem key={town} value={town.toLowerCase().replace(/\s+/g, "_")}>
                        {town}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Other fields remain unchanged */}
        {[ 
          { name: "postalCode", label: "Kod pocztowy", placeholder: "Wprowadź kod pocztowy" },
          { name: "street", label: "Ulica", placeholder: "Wprowadź nazwę ulicy" },
          { name: "latitude", label: "Szerokość geograficzna", placeholder: "Wprowadź szerokość geograficzną", type: "number" },
          { name: "longitude", label: "Długość geograficzna", placeholder: "Wprowadź długość geograficzną", type: "number" }
        ].map(({ name, label, placeholder, type = "text" }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input placeholder={placeholder} type={type} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>
    </div>
  );
}
