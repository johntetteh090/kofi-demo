import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
// import AuthWrapper from 'sections/auth/AuthWrapper';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import React from "react";
import { getStatusStyle } from "utils/getStatusColor";
import CarouselBanner from "components/CarouselBanner";

function createData(
    id: string,
    bookedDate: string,
    ActionDate: string,
    purpose: string,
    status: string
) {
    return { id, bookedDate, purpose, ActionDate, status };
}

const rows = [
    createData("APT-10293", "Nov 04, 2025 – 09:30 AM", "Nov 14, 2025 – 01:00 PM", "Budget Review Meeting", "Pending"),
    createData("APT-94821", "Dec 11, 2025 – 02:15 PM", "Dec 21, 2025 – 09:00 AM", "Staff Performance Check-In", "Accepted"),
    createData("APT-56203", "Oct 19, 2025 – 11:00 AM", "Oct 29, 2025 – 03:30 PM", "IT Security Audit Update", "Declined"),
    createData("APT-78344", "Jan 07, 2026 – 08:45 AM", "Jan 17, 2026 – 04:00 PM", "Marketing Strategy Session", "Pending"),
    createData("APT-44210", "Aug 23, 2025 – 01:30 PM", "Sep 02, 2025 – 12:00 PM", "Quarterly Goals Discussion", "Accepted"),

];

export default function BookAppointments() {
    return (

        <Box
            sx={{
                minHeight: '100%',
                width: '100%',
                backgroundColor: 'white',
                paddingX: 7,
                paddingY: 4,


            }}>

            <Box
                sx={{
                    flex: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignContent: 'center',
                    display: 'flex',

                }}>

                <Box>
                    <Typography sx={{
                        fontWeight: 800,
                        fontSize: 20,
                        color: 'black',
                        lineHeight: 0.2
                    }}>
                        Welcome Mr. John Doe
                    </Typography>

                    <Typography sx={{
                        color: 'rgba(0, 0, 0, 0.6)',
                        fontSize: 14,
                        fontWeight: 200,
                        mt: 0.9,
                        // lineHeight: 0.2
                    }}>
                        Johndoe@torghana.gov.gh
                    </Typography>
                </Box>


                {/* Right Button */}
                <Button
                    variant="contained"
                    // startIcon={<PlusOutlined />}
                    // onClick={() => setOpenSidebar(true)}
                    sx={{
                        textTransform: "none",
                        borderRadius: 2,
                        fontWeight: 600
                    }}
                >
                    Book Meeting
                </Button>

            </Box>

            <CarouselBanner />

            <Box sx={{
                mt: 7
            }}>
                <Typography sx={{
                    fontWeight: 600,
                    fontSize: 18,
                }}>
                    Upcoming Appointment Reminders
                </Typography>
            </Box>



            {/* Table Container */}
            <Box
                component="section"
                sx={{
                    backgroundColor: "white",
                    borderRadius: 4,
                    boxShadow: "none",
                    overflow: "hidden",
                    marginTop: 4,

                }}
            >

                <Typography sx={{
                    fontWeight: 500,
                    fontSize: 16,
                    color: 'black',
                    // paddingX: 3,
                    paddingY: 2
                }}>
                    Your last 5 meetings
                </Typography>
                <TableContainer component={Paper} sx={{
                    boxShadow: "none",
                    border: '1px solid #E0E0E0',

                    overflow: 'hidden'
                }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow

                            >
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">Booked date</TableCell>
                                <TableCell align="center">Decision date</TableCell>
                                <TableCell align="center">Purpose</TableCell>
                                <TableCell align="center">Status</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.id}
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
                                    }}
                                >
                                    <TableCell align="center" sx={{
                                        color: 'rgba(0,0,0,0.6)'
                                    }}>{row.id}</TableCell>
                                    <TableCell align="center">{row.bookedDate}</TableCell>
                                    <TableCell align="center">{row.ActionDate}</TableCell>
                                    <TableCell align="center">{row.purpose}</TableCell>

                                    <TableCell align="center">
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center"
                                            }}
                                        >

                                            {/* <Box sx={{
                                                borderRadius: 20,
                                                height:6,
                                                width: 6,
                                                backgroundColor: getStatusStyle(row.status)
                                            }}>

                                            </Box> */}
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


    );
}

