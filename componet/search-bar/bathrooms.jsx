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

export default function Bathrooms({ form }) {
  return (
    <FormField
      control={form.control}
      name="bathrooms"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Łazienki</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Wybierz liczbę łazienek" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Łazienka</SelectItem>
                <SelectItem value="2">2 Łazienki</SelectItem>
                <SelectItem value="3">3 Łazienki</SelectItem>
                <SelectItem value="4">4 Łazienki</SelectItem>
                <SelectItem value="5+">5 Łazienek</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
