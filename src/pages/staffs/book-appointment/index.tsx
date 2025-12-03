import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
// import AuthWrapper from 'sections/auth/AuthWrapper';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "@mui/material/Grid";



import React, { useState } from "react";
import { getStatusStyle } from "utils/getStatusColor";
import CarouselBanner from "components/CarouselBanner";
import UpcomingAppointments from "components/UpcomingAppointments";

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

    const [openBooking, setOpenBooking] = useState(false);


    return (

        <>


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
                        onClick={() => setOpenBooking(true)}
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

                <Box sx={{ mt: 7 }}>
                    <Typography sx={{ fontWeight: 600, fontSize: 18 }}>
                        Upcoming Appointment Reminders
                    </Typography>

                    <Grid container spacing={2} sx={{ mt: 4 }}>
                        {[1, 2, 3, 4,].map((item) => (
                            <Box key={item}>
                                <UpcomingAppointments
                                    title={`Meeting with Client ${item}`}
                                    status={item % 2 === 0 ? "pending" : "accepted"}
                                    applicant={`Client ${item}`}
                                    purpose="Project Discussion"
                                    date="Nov 20, 2025 • 10:00 AM"
                                />
                            </Box>
                        ))}
                    </Grid>
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
                        overflow: 'hidden',
                        mb: 5
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
                                                    alignItems: "center",
                                                    gap: 1,            // spacing between dot and text
                                                }}
                                            >
                                                {/* Status Dot */}
                                                <Box
                                                    sx={{
                                                        width: 7,
                                                        height: 7,
                                                        borderRadius: "50%",
                                                        backgroundColor: getStatusStyle(row.status).color,
                                                    }}
                                                />

                                                {/* Status Text */}
                                                <Typography sx={{
                                                    fontSize: 14, fontWeight: 500,
                                                    color: getStatusStyle(row.status).color
                                                }}>
                                                    {row.status}
                                                </Typography>
                                            </Box>

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>

            {/* Blur Overlay + Popup */}
            {openBooking && (
                <Box
                    sx={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backdropFilter: "blur(6px)",
                        backgroundColor: "rgba(0,0,0,0.4)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 2000
                    }}
                >
                    {/* Popup Card */}
                    <Box
                        sx={{
                            width: 400,
                            backgroundColor: "white",
                            borderRadius: 3,
                            p: 4,
                            boxShadow: 5,
                        }}
                    >
                        <Typography sx={{ fontWeight: 600, fontSize: 18, mb: 2 }}>
                            Book a Meeting
                        </Typography>

                        <TextField
                            fullWidth
                            // label="Email"
                            variant="outlined"
                            value="Sam Doe"
                            InputProps={{
                                readOnly: true,
                                sx: {
                                    backgroundColor: '#f5f5f5',   // light grey
                                }
                            }}
                            sx={{ mb: 2 }}
                        />

                        <TextField
                            fullWidth
                            // label="Email"
                            variant="outlined"
                            value="johndoe@torghana.gov.gh"
                            InputProps={{
                                readOnly: true,
                                sx: {
                                    backgroundColor: '#f5f5f5',   // light grey
                                }
                            }}
                            sx={{ mb: 2 }}
                        />


                        <TextField
                            fullWidth
                            label="Purpose"
                            variant="outlined"
                            multiline
                            rows={4}
                            sx={{ mb: 2 }}
                        />

                        <TextField
                            fullWidth
                            type="datetime-local"
                            label="Select Date For Meeting"
                            InputLabelProps={{ shrink: true }}
                            sx={{ mb: 3 }}
                        />

                        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
                            <Button variant="text" onClick={() => setOpenBooking(false)}>
                                Cancel
                            </Button>

                            <Button variant="contained">
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Box>
            )}

        </>




    );
}

