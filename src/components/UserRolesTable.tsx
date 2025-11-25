import { DeleteFilled, DeleteOutlined } from "@ant-design/icons";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";
import { danger } from "utils/appColors";

function createData(
    id: number,
    employeeName: string,
    employeeMail: string,
    lastLoggedIn: string,

) {
    return { id, employeeName, employeeMail, lastLoggedIn };
}

const rows = [
    createData(1, "Kofi Bonah", "KofiBonah@torghana.gov.gh", "Nov 13, 2025 – 10:00 AM"),

];

interface UserRolesTableProps {
    dialogMainText: string;
    dialogSubText?: string;
}

const UserRolesTable = ({ dialogMainText, dialogSubText }: UserRolesTableProps) => {

    const [deletesecretaryModal, setDeletesecretaryModal] = useState(false);

    return (

        <>

            <Box
                component="section"
                sx={{
                    backgroundColor: "white",
                    borderRadius: 4,
                    boxShadow: "none",
                    overflow: "hidden",
                    mt: 3,
                }}
            >
                <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow

                            >
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">Employee Name</TableCell>
                                <TableCell align="center">Employee Mail</TableCell>
                                <TableCell align="center">Last Logged in</TableCell>
                                <TableCell align="center"></TableCell>

                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{

                                        "&:last-child td, &:last-child th": { border: 0 },
                                        //   "& > *": { textAlign: "left" }
                                    }}
                                >
                                    <TableCell align="center">{row.id}</TableCell>
                                    <TableCell align="center">{row.employeeName}</TableCell>
                                    <TableCell align="center">{row.employeeMail}</TableCell>
                                    <TableCell align="center">{row.lastLoggedIn}</TableCell>
                                    <TableCell align="center">
                                        <Box
                                            // onClick={handleDelete}
                                            sx={{
                                                cursor: "pointer",
                                                display: "inline-flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                        >
                                            <DeleteOutlined style={{ color: "#d32f2f" }}
                                                onClick={() => setDeletesecretaryModal(!deletesecretaryModal)} />
                                        </Box>


                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>


            {/* DELETE SECRETARY MODAL */}
            <Dialog
                open={deletesecretaryModal}
                onClose={() => setDeletesecretaryModal(false)}
                fullWidth
                maxWidth="xs"
                BackdropProps={{
                    sx: {
                        backdropFilter: "blur(6px)",
                        backgroundColor: "rgba(0,0,0,0.2)"  // optional: soft dimming
                    }
                }}
            >
                <DialogTitle sx={{ fontWeight: 600 }}>{dialogMainText}</DialogTitle>

                <DialogContent>
                    <Typography sx={{ fontSize: 14, fontWeight: 400, color: '#333333' }}>
                        {dialogSubText}
                    </Typography>
                </DialogContent>

                <DialogActions>
                    <Button
                        sx={{
                            color: "black"
                        }}
                        onClick={() => setDeletesecretaryModal(false)}>Cancel</Button>

                    <Button
                        variant="contained"
                        // onClick={submitDecline}
                        sx={{
                            backgroundColor: danger,
                            color: '#FFFFFF',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: danger
                            }
                        }}

                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>

    )
}

export default UserRolesTable;