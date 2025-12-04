import { Typography } from "@mui/material";
import React from "react";

interface TextHeaderProps {
    text: string;
}

const TextHeader = ({ text }: TextHeaderProps) => {
    return (

        <Typography sx={{
              fontWeight: 700,
              fontSize: { xs: 24, md: 28 },
              color: "text.primary",
              mb: 0.5,
            }}>
            {text}
        </Typography>
    )
}

export default TextHeader;