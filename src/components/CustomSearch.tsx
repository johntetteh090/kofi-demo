import { FC } from "react";
import { Box, InputBase } from "@mui/material";
import { SearchOutlined } from "@ant-design/icons";



interface SearchBoxProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  width?: number | string;
}

const SearchBox: FC<SearchBoxProps> = ({
  placeholder = "Search...",
  value,
  onChange,
  width = 230
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#e7e7e76d",
        px: 2,
        py: 0.5,
        width,
        borderRadius: "25px",
        border: "1px solid #dddddd74",
        transition: "0.2s ease",

        "&:hover": {
          borderColor: "#aaaaaa51"
        },

        "&:focus-within": {
          borderColor: "#1976d2",
          backgroundColor: "#fff"
        }
      }}
    >
    <SearchOutlined style={{ fontSize: 16, color: "#666", marginRight: 8 }} />


      <InputBase
        fullWidth
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        sx={{
          fontSize: 14,
          color: "#333"
        }}
      />
    </Box>
  );
};

export default SearchBox;
