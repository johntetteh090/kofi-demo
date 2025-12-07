import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
    Card,
    Grid,
    Chip,
    Avatar,
    Stack,
    Divider,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Backdrop,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useMemo } from "react";
import { getStatusStyle } from "utils/getStatusColor";
import MainCard from "components/MainCard";
import {
    CalendarOutlined,
    CheckCircleOutlined,
    ClockCircleOutlined,
    CloseCircleOutlined,
    PlusOutlined,
    UserOutlined,
    FileTextOutlined,
    TrophyOutlined,
    BarChartOutlined
} from "@ant-design/icons";

interface AppointmentData {
    id: string;
    bookedDate: string;
    ActionDate: string;
    purpose: string;
    status: string;
    priority?: "High" | "Medium" | "Low";
}

function createData(
    id: string,
    bookedDate: string,
    ActionDate: string,
    purpose: string,
    status: string,
    priority?: "High" | "Medium" | "Low"
): AppointmentData {
    return { id, bookedDate, purpose, ActionDate, status, priority };
}

const rows: AppointmentData[] = [
    createData("APT-10293", "Nov 04, 2025 – 09:30 AM", "Nov 14, 2025 – 01:00 PM", "Budget Review Meeting", "Pending", "High"),
    createData("APT-94821", "Dec 11, 2025 – 02:15 PM", "Dec 21, 2025 – 09:00 AM", "Staff Performance Check-In", "Accepted", "Medium"),
    createData("APT-56203", "Oct 19, 2025 – 11:00 AM", "Oct 29, 2025 – 03:30 PM", "IT Security Audit Update", "Declined", "Low"),
    createData("APT-78344", "Jan 07, 2026 – 08:45 AM", "Jan 17, 2026 – 04:00 PM", "Marketing Strategy Session", "Pending", "High"),
    createData("APT-44210", "Aug 23, 2025 – 01:30 PM", "Sep 02, 2025 – 12:00 PM", "Quarterly Goals Discussion", "Accepted", "Medium"),
];

export default function BookAppointments() {
    const [openBooking, setOpenBooking] = useState(false);
    const [formData, setFormData] = useState({
        purpose: "",
        meetingDate: "",
        priority: "Medium",
        duration: "30"
    });

    // Calculate statistics
    const stats = useMemo(() => {
        const total = rows.length;
        const pending = rows.filter(r => r.status.toLowerCase() === "pending").length;
        const accepted = rows.filter(r => r.status.toLowerCase() === "accepted").length;
        const declined = rows.filter(r => r.status.toLowerCase() === "declined").length;
        const successRate = total > 0 ? Math.round((accepted / total) * 100) : 0;
        const avgResponseTime = "2.5 days"; // Mock data

        return { total, pending, accepted, declined, successRate, avgResponseTime };
    }, []);

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        // Handle form submission
        console.log("Submitting booking:", formData);
        setOpenBooking(false);
        setFormData({ purpose: "", meetingDate: "", priority: "Medium", duration: "30" });
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
            elevation={0}
            sx={{
                p: 3.5,
                borderRadius: 2,
                height: "100%",
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                    borderColor: color,
                    boxShadow: `0 4px 12px ${color}15`,
                },
                "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 3,
                    height: "100%",
                    bgcolor: color,
                },
            }}
        >
            <Stack spacing={2}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            fontWeight: 500,
                            fontSize: "0.875rem",
                        }}
                    >
                        {title}
                    </Typography>
                    <Box
                        sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 1.5,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: `${color}10`,
                            color: color,
                        }}
                    >
                        {icon}
                    </Box>
                </Stack>
                <Box>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            color: "text.primary",
                            lineHeight: 1.2,
                            mb: 0.5,
                        }}
                    >
                        {value}
                    </Typography>
                    {subtitle && (
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{
                                fontSize: "0.75rem",
                            }}
                        >
                            {subtitle}
                        </Typography>
                    )}
                </Box>
            </Stack>
        </Card>
    );

    const InsightCard = ({
        title,
        value,
        icon,
        color = "primary"
    }: {
        title: string;
        value: string | number;
        icon: React.ReactNode;
        color?: string;
    }) => {
        const colorMap: Record<string, string> = {
            success: "#2e7d32",
            warning: "#ed6c02",
            info: "#1976d2",
            primary: "#1976d2",
        };
        const cardColor = colorMap[color] || color;

        return (
            <Card
                elevation={0}
                sx={{
                    p: 3.5,
                    borderRadius: 2,
                    height: "100%",
                    bgcolor: "background.paper",
                    border: "1px solid",
                    borderColor: "divider",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                        borderColor: cardColor,
                        boxShadow: `0 4px 12px ${cardColor}15`,
                    },
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: 3,
                        height: "100%",
                        bgcolor: cardColor,
                    },
                }}
            >
                <Stack spacing={2}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                fontWeight: 500,
                                fontSize: "0.875rem",
                            }}
                        >
                            {title}
                        </Typography>
                        <Box
                            sx={{
                                width: 48,
                                height: 48,
                                borderRadius: 1.5,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                bgcolor: `${cardColor}10`,
                                color: cardColor,
                            }}
                        >
                            {icon}
                        </Box>
                    </Stack>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                color: "text.primary",
                                lineHeight: 1.2,
                            }}
                        >
                            {value}
                        </Typography>
                    </Box>
                </Stack>
            </Card>
        );
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                backgroundColor: "#f5f7fa",
                paddingX: { xs: 2, sm: 4, md: 6, lg: 8 },
                paddingY: 4,
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
                        Book Appointment with Managing Director
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
                        Senior Manager Portal
                    </Typography>
                </Box>

                <Button
                    variant="contained"
                    startIcon={<PlusOutlined />}
                    onClick={() => setOpenBooking(true)}
                    sx={{
                        textTransform: "none",
                        borderRadius: 2,
                        fontWeight: 600,
                        px: 3,
                        py: 1.5,
                        fontSize: 15,
                    }}
                >
                    New Booking Request
                </Button>
            </Box>

            {/* Statistics Cards */}
            <Stack 
                direction={{ xs: "column", sm: "row" }} 
                spacing={3} 
                sx={{ mb: 4 }}
            >
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <StatCard
                        title="Total Bookings"
                        value={stats.total}
                        icon={<CalendarOutlined style={{ fontSize: 24 }} />}
                        color="#1976d2"
                        subtitle="All time requests"
                    />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <StatCard
                        title="Pending"
                        value={stats.pending}
                        icon={<ClockCircleOutlined style={{ fontSize: 24 }} />}
                        color="#ed6c02"
                        subtitle="Awaiting response"
                    />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <StatCard
                        title="Accepted"
                        value={stats.accepted}
                        icon={<CheckCircleOutlined style={{ fontSize: 24 }} />}
                        color="#2e7d32"
                        subtitle="Confirmed meetings"
                    />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <StatCard
                        title="Declined"
                        value={stats.declined}
                        icon={<CloseCircleOutlined style={{ fontSize: 24 }} />}
                        color="#d32f2f"
                        subtitle="Not approved"
                    />
                </Box>
            </Stack>

            {/* Insights Section */}
            <Stack 
                direction={{ xs: "column", md: "row" }} 
                spacing={3} 
                sx={{ mb: 4 }}
            >
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <InsightCard
                        title="Success Rate"
                        value={`${stats.successRate}%`}
                        icon={<TrophyOutlined style={{ fontSize: 24 }} />}
                        color="success"
                    />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <InsightCard
                        title="Avg Response Time"
                        value={stats.avgResponseTime}
                        icon={<ClockCircleOutlined style={{ fontSize: 24 }} />}
                        color="warning"
                    />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <InsightCard
                        title="This Month"
                        value={stats.total}
                        icon={<BarChartOutlined style={{ fontSize: 24 }} />}
                        color="info"
                    />
                </Box>
            </Stack>





            {/* Appointments Table */}
            <MainCard
                title={
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <FileTextOutlined />
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            Recent Booking Requests
                        </Typography>
                    </Stack>
                }
                sx={{ mb: 4 }}
            >
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 600 }}>Appointment ID</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Booked Date</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Meeting Date</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Purpose</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Priority</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 600 }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{
                                        "&:hover": {
                                            backgroundColor: "action.hover",
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
                                            {row.id}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="body2">{row.bookedDate}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                            {row.ActionDate}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="body2">{row.purpose}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            label={row.priority || "Medium"}
                                            size="small"
                                            color={
                                                row.priority === "High"
                                                    ? "error"
                                                    : row.priority === "Medium"
                                                        ? "warning"
                                                        : "default"
                                            }
                                            sx={{ fontWeight: 500 }}
                                        />
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
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </MainCard>

            {/* Booking Dialog */}
            <Dialog
                open={openBooking}
                onClose={() => setOpenBooking(false)}
                maxWidth="sm"
                fullWidth
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
                        <CalendarOutlined style={{ fontSize: 20 }} />
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            Book Meeting with Managing Director
                        </Typography>
                    </Stack>
                </DialogTitle>
                <Divider />
                <DialogContent sx={{ pt: 3 }}>
                    <Stack spacing={3}>
                        <TextField
                            fullWidth
                            label="Your Name"
                            value="John Doe"
                            InputProps={{
                                readOnly: true,
                                startAdornment: <UserOutlined style={{ marginRight: 8, color: "text.secondary" }} />,
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    backgroundColor: "action.hover",
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            label="Email Address"
                            value="johndoe@torghana.gov.gh"
                            InputProps={{
                                readOnly: true,
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    backgroundColor: "action.hover",
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            label="Purpose of Meeting"
                            variant="outlined"
                            multiline
                            rows={4}
                            placeholder="Please provide a detailed description of the meeting purpose..."
                            value={formData.purpose}
                            onChange={(e) => handleInputChange("purpose", e.target.value)}
                            required
                        />

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="datetime-local"
                                    label="Preferred Meeting Date & Time"
                                    InputLabelProps={{ shrink: true }}
                                    value={formData.meetingDate}
                                    onChange={(e) => handleInputChange("meetingDate", e.target.value)}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel>Duration</InputLabel>
                                    <Select
                                        value={formData.duration}
                                        label="Duration"
                                        onChange={(e) => handleInputChange("duration", e.target.value)}
                                    >
                                        <MenuItem value="15">15 minutes</MenuItem>
                                        <MenuItem value="30">30 minutes</MenuItem>
                                        <MenuItem value="45">45 minutes</MenuItem>
                                        <MenuItem value="60">1 hour</MenuItem>
                                        <MenuItem value="90">1.5 hours</MenuItem>
                                        <MenuItem value="120">2 hours</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <FormControl fullWidth>
                            <InputLabel>Priority Level</InputLabel>
                            <Select
                                value={formData.priority}
                                label="Priority Level"
                                onChange={(e) => handleInputChange("priority", e.target.value)}
                            >
                                <MenuItem value="Low">Low - Can be scheduled flexibly</MenuItem>
                                <MenuItem value="Medium">Medium - Standard priority</MenuItem>
                                <MenuItem value="High">High - Urgent matter</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </DialogContent>
                <Divider />
                <DialogActions sx={{ p: 2.5 }}>
                    <Button onClick={() => setOpenBooking(false)} sx={{ textTransform: "none" }}>
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        disabled={!formData.purpose || !formData.meetingDate}
                        sx={{ textTransform: "none", px: 3 }}
                    >
                        Submit Request
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

