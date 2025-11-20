import { Box, FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

interface CustomRadioProps {
     value: string;
    selected: string;
    onChange: (value: string) => void;
    label: string;
    icon: React.ReactNode;
    activeColor: string;
}

export default function CustomRadioBtn({ value, selected, onChange, label, icon, activeColor }: CustomRadioProps) {
    
    const isActive = selected === value;
    
    return (
        <Box
            onClick={() => onChange(value)}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                pl: 2,
                py: 0.5,
                borderRadius: 2,
                border: `1px solid ${isActive ? activeColor : "#d9d9d9"}`,
                backgroundColor: isActive ? `${activeColor}05` : "white",
                cursor: "pointer",
                transition: "0.2s ease",
                width: "100%",
                mb: 2,
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box sx={{ color: activeColor }}>{icon}</Box>
                {label}
            </Box>

            <Radio
                checked={isActive}
                onChange={() => onChange(value)}
                value={value}
                sx={{
                    color: activeColor,
                    "&.Mui-checked": {
                        color: activeColor
                    },
                    transform: "scale(0.7)",     // reduce size
                }}
            />
        </Box>
    );
}
