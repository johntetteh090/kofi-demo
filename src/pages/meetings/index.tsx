import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/system/Box';
import React from 'react';
import { getStatusStyle } from 'utils/getStatusColor';

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
  createData(5, "Yaw Mensah", "Team Retrospective", "Nov 17, 2025 – 3:00 PM", "Pending")
];

export default function Meetings() {
  return (
    <Box component="section"
    // sx={{ p: 2, border: '1px dashed grey' }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{
              '& > *': { textAlign: 'center' } // centers all cells in this row
            }}>
              <TableCell>id</TableCell>
              <TableCell align="right">Employee Name</TableCell>
              <TableCell align="right">Purpose</TableCell>
              <TableCell align="right">Date & Time</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '& > *': { textAlign: 'center' }
                }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.employeeName}</TableCell>
                <TableCell align="right">{row.purpose}</TableCell>
                <TableCell align="right">{row.dateTime}</TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Box sx={getStatusStyle(row.status)}>
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
  );
}
