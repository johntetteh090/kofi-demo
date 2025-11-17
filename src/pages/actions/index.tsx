
import React, { useState } from 'react';
import { getStatusStyle } from 'utils/getStatusColor';
import {
    Box,
    Typography,
    FormControl,
    Select,
    MenuItem,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField
} from "@mui/material";
import CustomSelect from 'components/CustomSelect';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import SearchBox from 'components/CustomSearch';




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

export default function Actions() {

    const [declineOpen, setDeclineOpen] = useState(false);
    const [declineReason, setDeclineReason] = useState("");
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [selectedStatus, setSelectedStatus] = useState('');

    const handleDecline = (id: number) => {
        setSelectedRow(id);
        setDeclineReason("");
        setDeclineOpen(true);
    };

    const submitDecline = () => {
        console.log("Declined row:", selectedRow);
        console.log("Reason:", declineReason);

        setDeclineOpen(false);
    };

    return (
        <>
            <Box>
                {/* HEADER */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: 3,
                    }}
                >
                    <Typography sx={{ fontSize: 18,fontWeight:700 }}>Actions</Typography>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box sx={{ marginRight: 3 }}>
                            <SearchBox />
                        </Box>

                        <CustomSelect
                            items={[
                                { label: 'January', value: 'January' },
                                { label: 'February', value: 'February' },
                                { label: 'March', value: 'March' },
                                { label: 'April', value: 'April' }
                            ]}
                            value={selectedStatus}
                            onChange={setSelectedStatus}
                        />
                    </Box>
                </Box>

                {/* TABLE */}
                <Box
                    sx={{
                        backgroundColor: "white",
                        borderRadius: 4,
                        overflow: "hidden"
                    }}
                >
                    <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
                        <Table sx={{ minWidth: 650 }}>
                            <TableHead>
                                <TableRow sx={{ "& > *": { textAlign: "center" } }}>
                                    <TableCell align="center">ID</TableCell>
                                    <TableCell align="center">Employee Name</TableCell>
                                    <TableCell align="center">Purpose</TableCell>
                                    <TableCell align="center">Date & Time</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell align="center">{row.id}</TableCell>
                                        <TableCell align="center">{row.employeeName}</TableCell>
                                        <TableCell align="center">{row.purpose}</TableCell>
                                        <TableCell align="center">{row.dateTime}</TableCell>

                                        <TableCell align="center">
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    gap: 1
                                                }}
                                            >
                                                {/* Accept Button */}
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    startIcon={<CheckOutlined />}
                                                    sx={{
                                                        textTransform: "none",
                                                        borderRadius: 2,
                                                        backgroundColor: "white",
                                                        color: "#267326 !important",
                                                        border: "1px solid #267326 !important",
                                                        "&:hover": {
                                                            backgroundColor: "#267326 !important",
                                                            color: "white !important"
                                                        }
                                                    }}
                                                >
                                                    Accept
                                                </Button>

                                                {/* Decline Button */}
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    startIcon={<CloseOutlined />}
                                                    sx={{
                                                        textTransform: "none",
                                                        borderRadius: 2,
                                                        backgroundColor: "white",
                                                        color: "#e21c0e !important",
                                                        border: "1px solid #e21c0e !important",
                                                        "&:hover": {
                                                            backgroundColor: "#e21c0e !important",
                                                            color: "white !important"
                                                        }
                                                    }}
                                                    onClick={() => handleDecline(row.id)}
                                                >
                                                    Decline
                                                </Button>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>

            {/* DECLINE REASON MODAL */}
            <Dialog
                open={declineOpen}
                onClose={() => setDeclineOpen(false)}
                fullWidth
                maxWidth="sm"
                BackdropProps={{
                    sx: {
                        backdropFilter: "blur(6px)",
                        backgroundColor: "rgba(0,0,0,0.2)"  // optional: soft dimming
                    }
                }}
            >
                <DialogTitle>Reason for Decline</DialogTitle>

                <DialogContent>
                    <TextField
                        autoFocus
                        multiline
                        minRows={3}
                        fullWidth
                        placeholder="Enter reason..."
                        value={declineReason}
                        onChange={(e) => setDeclineReason(e.target.value)}
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setDeclineOpen(false)}>Cancel</Button>

                    <Button
                        variant="contained"
                        onClick={submitDecline}
                        disabled={!declineReason.trim()}
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}