import {
  Autocomplete,
  AutocompleteItem,
  Input,
  Button,
  Chip,
} from "@nextui-org/react";
import { works } from "../data/works";
import { useState } from "react";

export default function SelectorExperience() {
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [experienceItem, setExperienceItem] = useState([]);

  const handleSelect = (value) => {
    setSelectedValue(value);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddExperience = () => {
    if (inputValue.trim() || selectedValue.trim() !== "") {
      setExperienceItem([
        ...experienceItem,
        { role: inputValue, work: selectedValue },
      ]);
      setInputValue("");
      setSelectedValue("");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div>
        <ul className="flex gap-3">
          {experienceItem.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <Chip>{item.work}</Chip>
              <p className="">{item.role}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-3 lg:flex-row">
        <Autocomplete
          defaultItems={works}
          allowsCustomValue
          label="Search works"
          variant="bordered"
          className="max-w-auto"
          value={selectedValue}
          onSelectionChange={handleSelect}
        >
          {(item) => (
            <AutocompleteItem key={item.label}>{item.label}</AutocompleteItem>
          )}
        </Autocomplete>
        <Input
          type="text"
          label="Describe your role"
          className="max-w-auto"
          value={inputValue}
          onChange={handleChange}
        />
        <Button
          color="primary"
          size="lg"
          className="lg:w-[20rem]"
          onClick={handleAddExperience}
        >
          + Add Experience
        </Button>
      </div>
    </div>
  );
}
