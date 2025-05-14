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

export default function PropertyCondition({ form }) {
  return (
    <FormField
      control={form.control}
      name="property_condition"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Stan nieruchomości</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Wybierz stan nieruchomości" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nowa">Nowa</SelectItem>
                <SelectItem value="uzywana">Używana</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
