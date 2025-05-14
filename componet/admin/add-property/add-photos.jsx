import { FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function AddPhotos({ form }) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <FormField
        control={form.control}
        name="photos"
        render={({ field }) => (
          <FormItem>
            <Label htmlFor="photos">Photos</Label>
            
            <Input
              multiple
              type="file"
              onChange={(e) => field.onChange(e.target.files)} // Handle file selection
            />

            {/* Error message */}
            {form.formState.errors.photos && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.photos.message}
              </p>
            )}
          </FormItem>
        )}
      />
    </div>
  );
}
