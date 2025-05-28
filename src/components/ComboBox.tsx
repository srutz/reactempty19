
import { Check, ChevronsUpDown } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export type ComboBoxOption = { value: string, label: string } 

export type ComboBoxProps = { 
    value: string, 
    onValueChange: (value: string) => void
    style?: "regular" | "wide"
    options: ComboBoxOption[]
    showSearch?: boolean
}

export function ComboBox({ options, value, onValueChange, style, showSearch = true }: ComboBoxProps) {
    const [open, setOpen] = React.useState(false)
    let classes = ""
    switch (style) {
        case "regular": break;
        case "wide": classes = "w-[400px]"; break
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn("w-[200px] justify-between", classes)}
                >

                    {value
                        ? options.find((option) => option.value === value)?.label
                        : "Select option"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className={cn("w-[200px] p-0", classes)}>
                <Command>
                    {showSearch && (
                        <CommandInput placeholder="Search option..." />
                    )}
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    onSelect={(currentValue) => {
                                        onValueChange(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === option.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {option.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
