import {
  FormField,
  FormItem,
  FormLabel,
  FormControl
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function PropertyIdSearch({ form }) {
  return (
    <FormField
      control={form.control}
      name="property_id"
      render={({ field }) => (
        <FormItem>
          <FormLabel>ID nieruchomości</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="text"
              placeholder="Wprowadź ID nieruchomości"
              aria-label="Wyszukiwanie po ID nieruchomości"
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
