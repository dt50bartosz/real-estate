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

export default function NumberOfRooms({ form }) {
  return (
    <FormField
      control={form.control}
      name="number_of_rooms"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Liczba pokoi</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Wybierz liczbę pokoi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 pokój</SelectItem>
                <SelectItem value="2">2 pokoje</SelectItem>
                <SelectItem value="3">3 pokoje</SelectItem>
                <SelectItem value="4">4 pokoje</SelectItem>
                <SelectItem value="5">5 pokoi</SelectItem>
                <SelectItem value="6plus">6+ pokoi</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
