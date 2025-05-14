import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function PropertyInformation({ form }) {
  return (
    <div className="space-y-8">

      {/* --- Podstawowe informacje --- */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Podstawowe informacje</h3>

        {[
          { name: "propertyId", label: "ID nieruchomości", placeholder: "Wprowadź ID nieruchomości" },
          { name: "title", label: "Tytuł", placeholder: "Wprowadź tytuł nieruchomości" },
          { name: "orientation", label: "Orientacja", placeholder: "Np. Północ, Południe" },
        ].map((config) => (
          <FormField
            key={config.name}
            control={form.control}
            name={config.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{config.label}</FormLabel>
                <FormControl>
                  <Input placeholder={config.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        {/* Typ nieruchomości */}
        <FormField
          control={form.control}
          name="propertyType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Typ nieruchomości</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Wybierz typ nieruchomości" />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectItem value="apartament">Apartament</SelectItem>
                  <SelectItem value="dom">Dom</SelectItem>
                  <SelectItem value="willa">Willa</SelectItem>
                  <SelectItem value="szeregowiec">Szeregowiec</SelectItem>
                  <SelectItem value="kawalerka">Kawalerka</SelectItem>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                  <SelectItem value="dzialka">Działka</SelectItem>
                  <SelectItem value="lokal-uzytkowy">Lokal użytkowy</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Stan nieruchomości */}
        <FormField
          control={form.control}
          name="propertyCondition"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stan nieruchomości</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Wybierz stan" />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectItem value="nowa">Nowa</SelectItem>
                  <SelectItem value="uzywana">Używana</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* --- Informacje o powierzchni --- */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Informacje o powierzchni</h3>

        {[
          { name: "usefulArea", label: "Powierzchnia użytkowa (m²)", placeholder: "Podaj powierzchnię użytkową" },
          { name: "totalArea", label: "Powierzchnia całkowita (m²)", placeholder: "Podaj powierzchnię całkowitą" },
          { name: "bedrooms", label: "Liczba sypialni", placeholder: "Podaj liczbę sypialni" },
          { name: "bathrooms", label: "Liczba łazienek", placeholder: "Podaj liczbę łazienek" },
          { name: "floor", label: "Piętro", placeholder: "Podaj piętro" },
          { name: "yearOfConstruction", label: "Rok budowy", placeholder: "Podaj rok budowy" },
        ].map(({ name, label, placeholder }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input placeholder={placeholder} type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>

      {/* --- Informacje finansowe --- */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Informacje finansowe</h3>
        {[
          { name: "price", label: "Cena (€)", placeholder: "Podaj cenę" },
          { name: "ibi", label: "IBI (€ rocznie)", placeholder: "Podaj koszt IBI" },
          { name: "community", label: "Koszty wspólnoty (€ rocznie)", placeholder: "Podaj koszty wspólnoty" },
        ].map(({ name, label, placeholder }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input placeholder={placeholder} type="number" {...field} />
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
