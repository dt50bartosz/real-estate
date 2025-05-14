import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

export default function Description({ form }) {
  return (
    <div className="space-y-8 ">
      {/* --- Separate Description Section --- */}
      <h3 className="text-xl font-bold">Opis nieruchomości</h3>

      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Opis nieruchomości</FormLabel>
            <FormControl>
            <Textarea
                  placeholder="Opis nieruchomości"
                  className="resize-none"
                  {...field}
                />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
