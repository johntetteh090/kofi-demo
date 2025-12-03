import React, { useState, useMemo } from 'react';
import { getStatusStyle } from 'utils/getStatusColor';
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  TableContainer,
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
  TextField,
  InputAdornment,
  Chip,
  Avatar,
  Stack,
  Divider,
  Backdrop,
  Card,
  Grid,
} from "@mui/material";
import { Box as SystemBox } from "@mui/system";
import MainCard from 'components/MainCard';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ClockCircleOutlined,
  SearchOutlined,
  UserOutlined,
  CalendarOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
  FilterOutlined,
} from "@ant-design/icons";

interface MeetingData {
  id: number;
  employeeName: string;
  purpose: string;
  dateTime: string;
  status: string;
  email?: string;
  department?: string;
  declinedReason?: string;
}

function createData(
  id: number,
  employeeName: string,
  purpose: string,
  dateTime: string,
  status: string,
  email?: string,
  department?: string,
  declinedReason?: string
): MeetingData {
  return { id, employeeName, purpose, dateTime, status, email, department, declinedReason };
}

const allRows: MeetingData[] = [
  createData(1, "Kofi Bonah", "Project Kickoff", "Nov 13, 2025 – 10:00 AM", "Accepted", "kofi.bonah@torghana.gov.gh", "IT Department"),
  createData(2, "Ama Serwaa", "Design Review", "Nov 14, 2025 – 2:00 PM", "Pending", "ama.serwaa@torghana.gov.gh", "Design Team"),
  createData(3, "Kwame Nkrumah", "Sprint Planning", "Nov 15, 2025 – 11:00 AM", "Declined", "kwame.nkrumah@torghana.gov.gh", "Development", "Conflict with a high-priority or urgent meeting. The meeting is going to be rescheduled."),
  createData(4, "Abena Asante", "Client Meeting", "Nov 16, 2025 – 4:00 PM", "Accepted", "abena.asante@torghana.gov.gh", "Sales"),
  createData(5, "Yaw Mensah", "Team Retrospective", "Nov 17, 2025 – 3:00 PM", "Pending", "yaw.mensah@torghana.gov.gh", "Operations"),
  createData(6, "Efua Mensah", "Budget Review", "Nov 18, 2025 – 9:00 AM", "Declined", "efua.mensah@torghana.gov.gh", "Finance", "Scheduling conflict with another important meeting."),
  createData(7, "Kojo Asante", "Strategy Session", "Nov 19, 2025 – 1:00 PM", "Accepted", "kojo.asante@torghana.gov.gh", "Management"),
  createData(8, "Akosua Boateng", "Performance Review", "Nov 20, 2025 – 10:30 AM", "Pending", "akosua.boateng@torghana.gov.gh", "HR")
];

export default function Meetings() {
  const [openReason, setOpenReason] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMeeting, setSelectedMeeting] = useState<MeetingData | null>(null);

  // Filter meetings based on status and search query
  const filteredRows = useMemo(() => {
    let filtered = allRows;

    // Filter by status
    if (selectedStatus !== 'All') {
      filtered = filtered.filter(row => 
        row.status.toLowerCase() === selectedStatus.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(row =>
        row.employeeName.toLowerCase().includes(query) ||
        row.purpose.toLowerCase().includes(query) ||
        row.dateTime.toLowerCase().includes(query) ||
        (row.email && row.email.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [selectedStatus, searchQuery]);

  // Calculate statistics
  const stats = useMemo(() => {
    const total = allRows.length;
    const pending = allRows.filter(r => r.status.toLowerCase() === "pending").length;
    const accepted = allRows.filter(r => r.status.toLowerCase() === "accepted").length;
    const declined = allRows.filter(r => r.status.toLowerCase() === "declined").length;
    
    return { total, pending, accepted, declined };
  }, []);

  const handleViewDeclinedReason = (meeting: MeetingData) => {
    setSelectedMeeting(meeting);
    setSelectedReason(meeting.declinedReason || "No reason provided.");
    setOpenReason(true);
  };

  const StatCard = ({ 
    title, 
    value, 
    icon, 
    color, 
    subtitle 
  }: { 
    title: string; 
    value: string | number; 
    icon: React.ReactNode; 
    color: string;
    subtitle?: string;
  }) => (
    <Card
      sx={{
        p: 3,
        borderRadius: 3,
        height: "100%",
        background: `linear-gradient(135deg, ${color}08 0%, ${color}03 100%)`,
        border: `1px solid ${color}20`,
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: `0 8px 24px ${color}25`,
          borderColor: `${color}40`,
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: `linear-gradient(90deg, ${color} 0%, ${color}80 100%)`,
        },
      }}
    >
      <Stack direction="row" spacing={2.5} alignItems="flex-start" justifyContent="space-between">
        <SystemBox sx={{ flex: 1, zIndex: 1 }}>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ 
              mb: 1, 
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 0.5,
              fontSize: 11,
            }}
          >
            {title}
          </Typography>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 800, 
              color: color, 
              mb: 0.5,
              lineHeight: 1.2,
            }}
          >
            {value}
          </Typography>
          {subtitle && (
            <Typography 
              variant="caption" 
              color="text.secondary"
              sx={{ 
                fontWeight: 500,
                fontSize: 12,
              }}
            >
              {subtitle}
            </Typography>
          )}
        </SystemBox>
        <Avatar
          sx={{
            bgcolor: `${color}15`,
            color: color,
            width: 64,
            height: 64,
            border: `2px solid ${color}20`,
            boxShadow: `0 4px 12px ${color}20`,
          }}
        >
          {icon}
        </Avatar>
      </Stack>
    </Card>
  );

  return (
    <SystemBox
      sx={{
        minHeight: "100vh",
        height: "100%",
        width: "100%",
        backgroundColor: "#f5f7fa",
        paddingX: { xs: 2, sm: 4, md: 6, lg: 8 },
        paddingY: 4,
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: 24, md: 28 },
              color: "text.primary",
              mb: 0.5,
            }}
          >
            Meeting Management
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <UserOutlined style={{ fontSize: 14 }} />
            Secretary Portal
          </Typography>
        </Box>
      </Box>

      {/* Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Meetings"
            value={stats.total}
            icon={<CalendarOutlined style={{ fontSize: 24 }} />}
            color="#1976d2"
            subtitle="All scheduled meetings"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Pending"
            value={stats.pending}
            icon={<ClockCircleOutlined style={{ fontSize: 24 }} />}
            color="#ed6c02"
            subtitle="Awaiting decision"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Accepted"
            value={stats.accepted}
            icon={<CheckCircleOutlined style={{ fontSize: 24 }} />}
            color="#2e7d32"
            subtitle="Confirmed meetings"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Declined"
            value={stats.declined}
            icon={<CloseCircleOutlined style={{ fontSize: 24 }} />}
            color="#d32f2f"
            subtitle="Not approved"
          />
        </Grid>
      </Grid>

      {/* Filters and Search */}
      <MainCard sx={{ mb: 4 }}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center">
          <TextField
            fullWidth
            placeholder="Search by name, purpose, or date..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined style={{ color: "text.secondary" }} />
                </InputAdornment>
              ),
            }}
            sx={{ flex: 1 }}
          />
          <FormControl sx={{ minWidth: 180 }}>
            <Select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <MenuItem value="All">
                <Stack direction="row" spacing={1} alignItems="center">
                  <FilterOutlined style={{ fontSize: 14 }} />
                  <span>All Status</span>
                </Stack>
              </MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="accepted">Accepted</MenuItem>
              <MenuItem value="declined">Declined</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </MainCard>

      {/* Meetings Table */}
      <MainCard
        title={
          <Stack direction="row" alignItems="center" spacing={1}>
            <FileTextOutlined />
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Meeting Requests
            </Typography>
            {filteredRows.length !== allRows.length && (
              <Chip 
                label={`${filteredRows.length} of ${allRows.length}`} 
                size="small" 
                color="primary"
                sx={{ ml: 1 }}
              />
            )}
          </Stack>
        }
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Employee Name</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Purpose</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Date & Time</TableCell>
                <TableCell align="center" sx={{ fontWeight: 600 }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ py: 4 }}>
                    <Stack alignItems="center" spacing={1}>
                      <InfoCircleOutlined style={{ fontSize: 48, color: "text.secondary" }} />
                      <Typography color="text.secondary">
                        No meetings found matching your criteria
                      </Typography>
                    </Stack>
                  </TableCell>
                </TableRow>
              ) : (
                filteredRows.map((row) => (
                  <TableRow
                    key={row.id}
                    onClick={() => {
                      if (row.status.toLowerCase() === "declined") {
                        handleViewDeclinedReason(row);
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
                            : "action.hover",
                      },
                      "&:last-child td": { border: 0 },
                    }}
                  >
                    <TableCell>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "monospace",
                          fontWeight: 600,
                          color: "primary.main",
                        }}
                      >
                        #{row.id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Avatar
                          sx={{
                            width: 32,
                            height: 32,
                            bgcolor: "primary.light",
                            color: "primary.main",
                            fontSize: 14,
                            fontWeight: 600,
                          }}
                        >
                          {row.employeeName.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {row.employeeName}
                          </Typography>
                          {row.department && (
                            <Typography variant="caption" color="text.secondary">
                              {row.department}
                            </Typography>
                          )}
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{row.purpose}</Typography>
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <CalendarOutlined style={{ fontSize: 14, color: "text.secondary" }} />
                        <Typography variant="body2">{row.dateTime}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="center">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 1,
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
                          fontSize: 14,
                          fontWeight: 500,
                          color: getStatusStyle(row.status).color
                        }}>
                          {row.status}
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </MainCard>

      {/* Decline Reason Dialog */}
      <Dialog
        open={openReason}
        fullWidth
        maxWidth="sm"
        onClose={() => setOpenReason(false)}
        slots={{
          backdrop: Backdrop,
        }}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            },
          },
        }}
        PaperProps={{
          sx: {
            borderRadius: 3,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
          },
        }}
      >
        <DialogTitle>
          <Stack direction="row" alignItems="center" spacing={1}>
            <InfoCircleOutlined style={{ fontSize: 20, color: "error.main" }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Decline Reason
            </Typography>
          </Stack>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ pt: 3 }}>
          {selectedMeeting && (
            <Stack spacing={2} sx={{ mb: 2 }}>
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                  Employee
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {selectedMeeting.employeeName}
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                  Meeting Purpose
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {selectedMeeting.purpose}
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                  Scheduled Date & Time
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {selectedMeeting.dateTime}
                </Typography>
              </Box>
            </Stack>
          )}
          <Divider sx={{ my: 2 }} />
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              bgcolor: "error.light",
              border: "1px solid",
              borderColor: "error.main",
            }}
          >
            <Typography variant="body2" color="error.dark" sx={{ fontWeight: 600, mb: 1 }}>
              Reason for Decline:
            </Typography>
            <Typography variant="body1" color="text.primary">
              {selectedReason}
            </Typography>
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions sx={{ p: 2.5 }}>
          <Button
            onClick={() => {
              setOpenReason(false);
              setSelectedMeeting(null);
            }}
            sx={{ textTransform: "none" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </SystemBox>
  );
}
