import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { CheckIcon, ChevronDown } from "lucide-react"; // Replaced XCircle with ChevronDown
import { cn } from "@/lib/utils";

interface MultiSelectProps {
  options: { label: string; value: string }[];
  selected: string[];
  onSelectChange: (selectedValues: string[]) => void;
  placeholder?: string;
}

export function MultiSelect({
  options,
  selected,
  onSelectChange,
  placeholder,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const handleToggle = (value: string) => {
    const newSelected = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];
    onSelectChange(newSelected);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="max-w-[1000px] w-full h-[50px] opacity-100 bg-[#D9D9D908] border-b border-[#4B4C46] rounded-tl-[20px] rounded-tr-[20px] flex justify-between items-center px-2 cursor-pointer">
          <span className="text-[13px] text-white whitespace-nowrap overflow-hidden text-ellipsis">
            {selected.length > 0
              ? selected
                  .map(
                    (value) => options.find((opt) => opt.value === value)?.label
                  )
                  .filter(Boolean)
                  .map((label, index, arr) => (
                    <React.Fragment key={label}>
                      {`${label},`}
                      {index < arr.length - 1 && (
                        <span className="inline-block ml-3"></span>
                      )}
                    </React.Fragment>
                  ))
              : placeholder || "Select items..."}
          </span>

          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50 text-white" />
        </div>
      </PopoverTrigger>

      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 bg-[#D9D9D908] border border-[#4B4C46] text-white rounded-md">
        <Command className="bg-black text-white">
          <CommandInput
            placeholder="Search options..."
            className="text-white placeholder:text-white/50 bg-transparent border-none focus:ring-0"
          />
          <CommandEmpty className="px-2 py-2 text-white/70">
            No options found.
          </CommandEmpty>
          <CommandGroup className="bg-[#D9D9D908]">
            {options.map((option) => (
              <CommandItem
                key={option.value}
                onSelect={() => handleToggle(option.value)}
                className="flex items-center justify-between text-white hover:bg-white/10"
              >
                {option.label}
                {selected.includes(option.value) && (
                  <CheckIcon className="ml-auto h-4 w-4 text-white" />
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
