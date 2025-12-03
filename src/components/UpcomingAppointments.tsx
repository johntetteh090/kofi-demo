

import { Card, CardContent, Typography, Box, Divider, capitalize } from "@mui/material";
import capitalizeFirstLetter from "utils/capitalize";
import { getStatusStyle } from "utils/getStatusColor";

interface AppointmentData {
  title: string;
  status: string;
}



export default function AppointmentCard({title, status, applicant, purpose, date}: AppointmentData & {applicant: string; purpose: string; date: string}) {
  return (
    <Card
      // elevation={3}
      sx={{
        borderRadius: 3,
        p: 2,
        width: "100%",
        border: 1,
        borderColor: getStatusStyle(status).color,
      }}
    >
      <CardContent>
        {/* Title */}
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mt: 1, gap: 1 }}>
          {/* Status Dot */}
          <Box
            sx={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              backgroundColor: getStatusStyle(status).color,
            }}
          />
          <Typography variant="body2" sx={{ color: "gray" }}>
            {capitalizeFirstLetter(status)}
          </Typography>
        </Box>

        {/* <Divider sx={{ my: 2 }} /> */}

        <Typography variant="body2" sx={{ mt: 1 }}>
          <strong>Purpose:</strong> {purpose}
        </Typography>

        <Typography variant="body2" sx={{ mt: 1, }}>
          <strong>Date & Time:{" "}</strong> 
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
}
