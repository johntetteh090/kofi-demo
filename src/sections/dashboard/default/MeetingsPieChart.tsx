import React from "react";
import { PieChart } from '@mui/x-charts/PieChart';
import { Box, Stack } from "@mui/system";
import { Typography } from "@mui/material";



export default function MeetingsPieChart() {

    const data = [
    { id: 0, value: 40, label: "Accepted", color: "#1976d2" },
    { id: 1, value: 25, label: "Pending", color: "#ff9800" },
    { id: 2, value: 35, label: "Declined", color: "#f44336" }
  ];

    return (
        <Box 
      sx={{ 
        width: "100%", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center" 
      }}
    >

      {/* ⭐ Custom Legend (Row) */}
      <Stack direction="row" spacing={3} sx={{ mb: 2 ,mt: 3}}>
        {data.map((item) => (
          <Stack key={item.id} direction="row" alignItems="center" spacing={1}>
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: item.color,
              }}
            />
            <Typography sx={{ fontSize: 14 }}>{item.label}</Typography>
          </Stack>
        ))}
      </Stack>

      {/* ⭐ Pie Chart with Legend Hidden */}
      <PieChart
        series={[
          {
            data,
            innerRadius: 40,
            outerRadius: 150,
          },
        ]}
        width={350}
        height={450}
        sx={{
    "& .MuiChartsLegend-root": {
      display: "none !important",
    }
  }}
      />
    </Box>
    );
}
