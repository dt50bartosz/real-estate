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

export default function PropertyType({ form }) {
  return (
    <FormField
      control={form.control}
      name="property_type"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Typ nieruchomości</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Wybierz typ nieruchomości" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mieszkanie">Mieszkanie</SelectItem>
                <SelectItem value="dom">Dom</SelectItem>
                <SelectItem value="apartament">Apartament</SelectItem>
                <SelectItem value="willa">Willa</SelectItem>
                <SelectItem value="blizniak">Bliźniak</SelectItem>
                <SelectItem value="kawalerka">Kawalerka</SelectItem>
                <SelectItem value="duplex">Duplex</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
