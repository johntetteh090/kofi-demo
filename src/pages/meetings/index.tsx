
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
  Button
} from "@mui/material";
import CustomSelect from 'components/CustomSelect';

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

export default function Meetings() {

  const [openReason, setOpenReason] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");
  const [selectedStatus,setSelectedStatus]=useState('All');


  return (
    <>

      {/* Blur Wrapper */}
      <Box sx={{ filter: openReason ? "blur(3px)" : "none" }}>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            py: 3,
          }}
        >
          {/* Left Text */}
          <Typography sx={{fontSize: 18,fontWeight:700}}>Meetings</Typography>

          <CustomSelect 
          items={[
            { label: 'All', value: 'All' },
            { label: 'Pending', value: 'pending' },
          { label: 'Accepted', value: 'accepted' },
          { label: 'Declined', value: 'declined' }]} 
          value={selectedStatus}
           onChange={(value) => setSelectedStatus(value) }/>
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
                  sx={{
                    "& > *": { textAlign: "center" }
                  }}
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
                      if (row.status.toLowerCase() === "declined") {
                        setSelectedReason("Conflict with a high-priority or urgent meeting. The meeting is going to be rescheduled.");
                        setOpenReason(true);
                      }
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
                      "& > *": { textAlign: "left" }
                    }}
                  >
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.employeeName}</TableCell>
                    <TableCell>{row.purpose}</TableCell>
                    <TableCell>{row.dateTime}</TableCell>

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

      {/* Dialog Popup */}
      <Dialog open={openReason}
        fullWidth
        maxWidth="sm"
        onClose={() => setOpenReason(false)}>
        <DialogTitle sx={{fontWeight:500, fontSize:18}}>Declined Reason</DialogTitle>
        <DialogContent>
          <Typography sx={{ mt: 1 }}>{selectedReason}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenReason(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>

  );
}
