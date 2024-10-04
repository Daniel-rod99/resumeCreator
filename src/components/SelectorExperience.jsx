import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { works } from "../data/works";

export default function SelectorExperience() {
  return (
    <div className="flex flex-col w-full max-w-xs gap-2">
      <Autocomplete
        allowsCustomValue
        label="Search works"
        variant="bordered"
        className="max-w-xs"
        defaultItems={works}
      >
        {(item) => (
          <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
}
