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

export default function Location({ form }) {
  return (
    <FormField
      control={form.control}
      name="location"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Lokalizacja</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="sm:w-full">
                <SelectValue placeholder="Wybierz obszar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="torrevieja">Torrevieja</SelectItem>
                <SelectItem value="la_mata">La Mata</SelectItem>
                <SelectItem value="guardamar_del_segura">Guardamar del Segura</SelectItem>
                <SelectItem value="orihuela_costa">Orihuela Costa</SelectItem>
                <SelectItem value="villamartin">Villamartín</SelectItem>
                <SelectItem value="los_alcazares">Los Alcázares</SelectItem>
                <SelectItem value="campoamor">Campoamor</SelectItem>
                <SelectItem value="punta_prima">Punta Prima</SelectItem>
                <SelectItem value="almoradi">Almoradí</SelectItem>
                <SelectItem value="callosa_de_segura">Callosa de Segura</SelectItem>
                <SelectItem value="benejuzar">Benejúzar</SelectItem>
                <SelectItem value="dolores">Dolores</SelectItem>
                <SelectItem value="san_fulgencio">San Fulgencio</SelectItem>
                <SelectItem value="los_montesinos">Los Montesinos</SelectItem>
                <SelectItem value="benijofar">Benijófar</SelectItem>
                <SelectItem value="torre_de_la_horca">Torre de la Horca</SelectItem>
                <SelectItem value="la_zenia">La Zenia</SelectItem>
                <SelectItem value="florida">Florida</SelectItem>
                <SelectItem value="el_che">El Che</SelectItem>
                <SelectItem value="las_colinas">Las Colinas</SelectItem>
                <SelectItem value="orihuela">Orihuela</SelectItem>
                <SelectItem value="torre_del_moro">Torre del Moro</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
