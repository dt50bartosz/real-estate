import {
  FormField,
  FormItem,
  FormLabel,
  FormControl
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";

export default function PriceRange({ form }) {
  return (
    <FormField
      control={form.control}
      name="price_range"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Zakres cenowy</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Wybierz zakres cenowy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-99999">Poniżej 100 000 €</SelectItem>
                <SelectItem value="100000-150000">100 000 € - 150 000 €</SelectItem>
                <SelectItem value="150000-200000">150 000 € - 200 000 €</SelectItem>
                <SelectItem value="200000-250000">200 000 € - 250 000 €</SelectItem>
                <SelectItem value="250000plus">Powyżej 250 000 €</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
