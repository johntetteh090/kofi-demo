import React, { useState, useMemo } from "react";
import { getStatusStyle } from "utils/getStatusColor";
import {
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Avatar,
    Stack,
    Card,
    TextField,
    InputAdornment,
    FormControl,
    Select,
    MenuItem,
    Chip,
    Divider,
} from "@mui/material";
import { Box as SystemBox } from "@mui/system";
import MainCard from "components/MainCard";
import {
    DownloadOutlined,
    FileTextOutlined,
    UserOutlined,
    CalendarOutlined,
    CheckCircleOutlined,
    ClockCircleOutlined,
    CloseCircleOutlined,
    SearchOutlined,
    FilterOutlined,
    BarChartOutlined,
    InfoCircleOutlined,
} from "@ant-design/icons";
import TextHeader from "components/Textheaders";

interface ReportData {
    id: number;
    employeeName: string;
    purpose: string;
    dateTime: string;
    status: string;
    email?: string;
    department?: string;
}

function createData(
    id: number,
    employeeName: string,
    purpose: string,
    dateTime: string,
    status: string,
    email?: string,
    department?: string
): ReportData {
    return { id, employeeName, purpose, dateTime, status, email, department };
}

const allRows: ReportData[] = [
    createData(1, "Kofi Bonah", "Project Kickoff", "Nov 13, 2025 – 10:00 AM", "Accepted", "kofi.bonah@torghana.gov.gh", "IT Department"),
    createData(2, "Ama Serwaa", "Design Review", "Nov 14, 2025 – 2:00 PM", "Pending", "ama.serwaa@torghana.gov.gh", "Design Team"),
    createData(3, "Kwame Nkrumah", "Sprint Planning", "Nov 15, 2025 – 11:00 AM", "Declined", "kwame.nkrumah@torghana.gov.gh", "Development"),
    createData(4, "Abena Asante", "Client Meeting", "Nov 16, 2025 – 4:00 PM", "Accepted", "abena.asante@torghana.gov.gh", "Sales"),
    createData(5, "Yaw Mensah", "Team Retrospective", "Nov 17, 2025 – 3:00 PM", "Pending", "yaw.mensah@torghana.gov.gh", "Operations"),
    createData(6, "Efua Mensah", "Budget Review", "Nov 18, 2025 – 9:00 AM", "Declined", "efua.mensah@torghana.gov.gh", "Finance"),
    createData(7, "Kojo Asante", "Strategy Session", "Nov 19, 2025 – 1:00 PM", "Accepted", "kojo.asante@torghana.gov.gh", "Management"),
    createData(8, "Akosua Boateng", "Performance Review", "Nov 20, 2025 – 10:30 AM", "Pending", "akosua.boateng@torghana.gov.gh", "HR")
];

export default function Reports() {
    const [dateRange, setDateRange] = useState("30days");
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    // Filter rows based on date range, status, and search query
    const filteredRows = useMemo(() => {
        let filtered = allRows;

        // Filter by status
        if (statusFilter !== "All") {
            filtered = filtered.filter(row => 
                row.status.toLowerCase() === statusFilter.toLowerCase()
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

        // Date range filtering would be implemented here based on actual date values
        return filtered;
    }, [dateRange, statusFilter, searchQuery]);

    // Calculate statistics
    const stats = useMemo(() => {
        const total = allRows.length;
        const accepted = allRows.filter(r => r.status.toLowerCase() === "accepted").length;
        const pending = allRows.filter(r => r.status.toLowerCase() === "pending").length;
        const declined = allRows.filter(r => r.status.toLowerCase() === "declined").length;
        const successRate = total > 0 ? Math.round((accepted / total) * 100) : 0;

        return { total, accepted, pending, declined, successRate };
    }, []);

    const handleExport = () => {
        console.log("Exporting reports for date range:", dateRange);
        // Export functionality would be implemented here
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

    return (
        <SystemBox
            sx={{
                minHeight: "100vh",
                height: "100%",
                width: "100%",
                backgroundColor: "#f5f7fa",
                // paddingX: { xs: 2, sm: 4, md: 6, lg: 8 },
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

                    <TextHeader text='Reports & Analytics'/>
                    
                    <Typography
                        sx={{
                            color: "text.secondary",
                            fontSize: 14,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <BarChartOutlined style={{ fontSize: 14 }} />
                        View and export meeting reports
                    </Typography>
                </Box>

                <Stack direction="row" spacing={2} alignItems="center">
                    <FormControl sx={{ minWidth: 180 }}>
                        <Select
                            value={dateRange}
                            onChange={(e) => setDateRange(e.target.value)}
                        >
                            <MenuItem value="7days">Last 7 Days</MenuItem>
                            <MenuItem value="30days">Last 30 Days</MenuItem>
                            <MenuItem value="3months">Last 3 Months</MenuItem>
                            <MenuItem value="6months">Last 6 Months</MenuItem>
                            <MenuItem value="1year">Last 1 Year</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        variant="contained"
                        startIcon={<DownloadOutlined />}
                        onClick={handleExport}
                        sx={{
                            textTransform: "none",
                            borderRadius: 2,
                            fontWeight: 600,
                            px: 3,
                            py: 1.5,
                        }}
                    >
                        Export Report
                    </Button>
                </Stack>
            </Box>

            {/* Statistics Cards */}
            <Stack 
                direction={{ xs: "column", sm: "row" }} 
                spacing={3} 
                sx={{ mb: 4 }}
            >
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <StatCard
                        title="Total Meetings"
                        value={stats.total}
                        icon={<FileTextOutlined style={{ fontSize: 24 }} />}
                        color="#1976d2"
                        subtitle="All time records"
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
                        title="Pending"
                        value={stats.pending}
                        icon={<ClockCircleOutlined style={{ fontSize: 24 }} />}
                        color="#ed6c02"
                        subtitle="Awaiting response"
                    />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <StatCard
                        title="Success Rate"
                        value={`${stats.successRate}%`}
                        icon={<BarChartOutlined style={{ fontSize: 24 }} />}
                        color="#9c27b0"
                        subtitle="Acceptance rate"
                    />
                </Box>
            </Stack>

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
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <MenuItem value="All">
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <FilterOutlined style={{ fontSize: 14 }} />
                                    <span>All Status</span>
                                </Stack>
                            </MenuItem>
                            <MenuItem value="accepted">Accepted</MenuItem>
                            <MenuItem value="pending">Pending</MenuItem>
                            <MenuItem value="declined">Declined</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
            </MainCard>

            {/* Reports Table */}
            <MainCard
                title={
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <FileTextOutlined />
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            Meeting Reports
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
                                                No reports found matching your criteria
                                            </Typography>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredRows.map((row) => (
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
        </SystemBox>
    );
}