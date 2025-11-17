import React from "react";
import { FormControl, Select, MenuItem } from "@mui/material";

export interface SelectItem {
  label: string;
  value: string;
}

interface CustomSelectProps {
  items: SelectItem[];
  value: string;
  onChange: (value: string) => void;
  width?: number | string;
  size?: "small" | "medium";
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  items,
  value,
  onChange,
  width = 140,
  size = "small",
}) => {
  return (
    <FormControl size={size} sx={{ minWidth: width }}>
      <Select
        value={value != '' ? value : items[0]?.value}
        onChange={(e) => onChange(e.target.value as string)}
        defaultValue={items[0]?.value}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
