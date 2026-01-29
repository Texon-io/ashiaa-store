import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils"; // To merge classes

export default function CustomSelect({
  value,
  onValueChange,
  options = [], // Array of options
  label, // Label for the select if needed
  placeholder = "Select an option",
  id,
  className, // Classes for the select
  containerClass, // Classes for the container
}) {
  return (
    <div className={cn(label ? "space-y-2 text-left" : "", containerClass)}>
      {label && (
        <Label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </Label>
      )}

      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger
          id={id}
          className={cn(
            "w-full rounded-lg border-gray-200 focus:ring-accent-dark focus:border-accent-dark transition-all cursor-pointer shadow-sm bg-white",
            className,
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent className="bg-white rounded-lg shadow-xl p-1 border-gray-200">
          {options.length > 0 ? (
            options.map((item) => (
              <SelectItem
                key={item.id ? item.id : item}
                value={item.id ? item.id : item}
                className="cursor-pointer transition-colors focus:bg-accent-dark focus:text-white data-[state=checked]:bg-accent-dark/10 data-[state=checked]:text-accent-dark"
              >
                {item.label ? item.label : item}
              </SelectItem>
            ))
          ) : (
            <div className="p-2 text-sm text-gray-500 text-center">
              No options available
            </div>
          )}
        </SelectContent>
      </Select>
    </div>
  );
}
