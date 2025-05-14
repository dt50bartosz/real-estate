import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";


export default function SellerInformation({form}) {
    return (
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Informacje o Sprzedajacym</h3>
  
          {[ 
            { name: "sellerName", label: "Sprzedający", placeholder: "Imię Sprzedającego" },
            { name: "telephone", label: "Numer telefonu", placeholder: "Numer telefonu" },
          ].map(({ name, label, placeholder, type = "text" }) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{label}</FormLabel>
                  <FormControl>
                    <Input placeholder={placeholder} type={type} {...field} />
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
  