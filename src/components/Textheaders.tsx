import { Typography } from "@mui/material";
import React from "react";

interface TextHeaderProps {
    text: string;
}

const TextHeader = ({ text }: TextHeaderProps) => {
    return (

        <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
            {text}
        </Typography>
    )
}

export default TextHeader;