
import { DownloadOutlined, ExportOutlined, FileTextOutlined } from "@ant-design/icons";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import CustomSelect from "components/CustomSelect";
import TextHeader from "components/Textheaders";
import React from "react";
import { getStatusStyle } from "utils/getStatusColor";

function createData(
  id: number,
  employeeName: string,
  purpose: string,
  dateTime: string,
  status: string
) {
  return { id, employeeName, purpose, dateTime, status };
}

const rows = [
  createData(1, "Kofi Bonah", "Project Kickoff", "Nov 13, 2025 – 10:00 AM", "Accepted"),
  createData(2, "Ama Serwaa", "Design Review", "Nov 14, 2025 – 2:00 PM", "Pending"),
  createData(3, "Kwame Nkrumah", "Sprint Planning", "Nov 15, 2025 – 11:00 AM", "Declined"),
  createData(4, "Abena Asante", "Client Meeting", "Nov 16, 2025 – 4:00 PM", "Accepted"),
  createData(5, "Yaw Mensah", "Team Retrospective", "Nov 17, 2025 – 3:00 PM", "Pending"),
  createData(6, "Kwame Nkrumah", "Sprint Planning", "Nov 15, 2025 – 11:00 AM", "Declined"),
  createData(7, "Abena Asante", "Client Meeting", "Nov 16, 2025 – 4:00 PM", "Accepted"),
  createData(8, "Yaw Mensah", "Team Retrospective", "Nov 17, 2025 – 3:00 PM", "Pending")
];

export default function Reports() {
    return (
        <Box>
            {/* Top Bar */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    py: 3,
                }}
            >

                <TextHeader text="Reports" />


                <Box sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                }}>

                    <CustomSelect
                        items={
                            [
                                { label: "Last 7 Days", value: "7days" },
                                { label: "Last 30 Days", value: "30days" },
                                { label: "Last 3 Months", value: "3months" },
                                { label: "Last 6 Months", value: "6months" },
                                { label: "Last 1 Year", value: "1year" },
                            ]
                        }
                        value={""}
                        onChange={(value) => null} />
                    <Button
                        variant="contained"
                        sx={{
                            textTransform: "none",
                            borderRadius: 2,
                            fontWeight: 600,
                            minWidth: 40,       // keeps it square
                            padding: "10px 10px" // tighter for icon-only
                        }}
                    >
                        
                        <DownloadOutlined />
                    </Button>
                </Box>

            </Box>

            {/* Table Container */}
                    <Box
                      component="section"
                      sx={{
                        backgroundColor: "white",
                        borderRadius: 4,
                        boxShadow: "none",
                        overflow: "hidden"
                      }}
                    >
                      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow
                            //   sx={{
                            //     "& > *": { textAlign: "center" }
                            //   }}
                            >
                              <TableCell align="center">ID</TableCell>
                              <TableCell align="center">Employee Name</TableCell>
                              <TableCell align="center">Purpose</TableCell>
                              <TableCell align="center">Date & Time</TableCell>
                              <TableCell align="center">Status</TableCell>
                            </TableRow>
                          </TableHead>
            
                          <TableBody>
                            {rows.map((row) => (
                              <TableRow
                                key={row.id}
                                onClick={() => {
                                //   if (row.status.toLowerCase() === "declined") {
                                //     setSelectedReason("Conflict with a high-priority or urgent meeting. The meeting is going to be rescheduled.");
                                //     setOpenReason(true);
                                //   }
                                }}
                                sx={{
                                  cursor:
                                    row.status.toLowerCase() === "declined"
                                      ? "pointer"
                                      : "default",
                                  "&:hover": {
                                    backgroundColor:
                                      row.status.toLowerCase() === "declined"
                                        ? "#fff5f5"
                                        : "inherit"
                                  },
                                  "&:last-child td, &:last-child th": { border: 0 },
                                //   "& > *": { textAlign: "left" }
                                }}
                              >
                                <TableCell align="center">{row.id}</TableCell>
                                <TableCell align="center">{row.employeeName}</TableCell>
                                <TableCell align="center">{row.purpose}</TableCell>
                                <TableCell align="center">{row.dateTime}</TableCell>
            
                                <TableCell align="center">
                                  <Box
                                    sx={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center"
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        px: 2,
                                        py: 0.5,
                                        borderRadius: "16px",
                                        backgroundColor: getStatusStyle(row.status),
                                      }}
                                    >
                                      {row.status}
                                    </Box>
                                  </Box>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  
        </Box>
    )
}