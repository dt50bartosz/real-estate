import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

export default function ExtraInformation({ form }) {
  const items = [
    { id: "dostep_dla_niepelnosprawnych", label: "Dostęp dla osób niepełnosprawnych" },
    { id: "klimatyzacja", label: "Klimatyzacja" },
    { id: "winda", label: "Winda" },
    { id: "system_bezpieczenstwa", label: "System bezpieczeństwa" },
    { id: "przyjazne_zwierzetom", label: "Przyjazne zwierzętom" },
    { id: "silownia", label: "Siłownia" },
    { id: "wbudowane_szafy", label: "Wbudowane szafy" },
    { id: "niezalezna_kuchnia", label: "Niezależna kuchnia" },
    { id: "umeblowane", label: "Umeblowane" },
    { id: "balkon", label: "Balkon" },
    { id: "taras", label: "Taras" },
    { id: "prywatny_basen", label: "Prywatny basen" },
    { id: "wspolny_basen", label: "Wspólny basen" },
    { id: "podgrzewany_basen", label: "Podgrzewany basen" },
    { id: "basen_kryty", label: "Basen kryty" },
    { id: "wspolne_solarium", label: "Wspólne solarium" },
    { id: "ogrod", label: "Ogród" },
    { id: "garaz", label: "Garaż" },
    { id: "parking_dla_gosci", label: "Parking dla gości" },
    { id: "centra_handlowe_w_okolicy", label: "Centra handlowe w okolicy" },
    { id: "blisko_morza", label: "Blisko morza" },
    { id: "widok_na_morze", label: "Widok na morze" },
    { id: "w_centrum", label: "W centrum" }
  ];

  return (
    <div className="space-y-8 max-h-[20vh] overflow-y-auto pr-2">
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Dodatkowe Informacje</h3>

        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Sidebar</FormLabel>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.id])
                              : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== item.id
                                  )
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
