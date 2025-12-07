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
    Avatar,
    Stack,
    Divider,
    Backdrop,
    Card,
    Grid,
    InputAdornment,
    Chip,
} from "@mui/material";
import { Box as SystemBox } from "@mui/system";
import MainCard from 'components/MainCard';
import { 
    CheckOutlined, 
    CloseOutlined,
    UserOutlined,
    CalendarOutlined,
    FileTextOutlined,
    CheckCircleOutlined,
    ClockCircleOutlined,
    CloseCircleOutlined,
    SearchOutlined,
    FilterOutlined,
    InfoCircleOutlined,
} from '@ant-design/icons';
import TextHeader from 'components/Textheaders';




interface ActionData {
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
): ActionData {
    return { id, employeeName, purpose, dateTime, status, email, department };
}

const allRows: ActionData[] = [
    createData(1, "Kofi Bonah", "Project Kickoff", "Nov 13, 2025 – 10:00 AM", "Pending", "kofi.bonah@torghana.gov.gh", "IT Department"),
    createData(2, "Ama Serwaa", "Design Review", "Nov 14, 2025 – 2:00 PM", "Pending", "ama.serwaa@torghana.gov.gh", "Design Team"),
    createData(3, "Kwame Nkrumah", "Sprint Planning", "Nov 15, 2025 – 11:00 AM", "Pending", "kwame.nkrumah@torghana.gov.gh", "Development"),
    createData(4, "Abena Asante", "Client Meeting", "Nov 16, 2025 – 4:00 PM", "Pending", "abena.asante@torghana.gov.gh", "Sales"),
    createData(5, "Yaw Mensah", "Team Retrospective", "Nov 17, 2025 – 3:00 PM", "Pending", "yaw.mensah@torghana.gov.gh", "Operations"),
    createData(6, "Efua Mensah", "Budget Review", "Nov 18, 2025 – 9:00 AM", "Pending", "efua.mensah@torghana.gov.gh", "Finance"),
    createData(7, "Kojo Asante", "Strategy Session", "Nov 19, 2025 – 1:00 PM", "Pending", "kojo.asante@torghana.gov.gh", "Management"),
    createData(8, "Akosua Boateng", "Performance Review", "Nov 20, 2025 – 10:30 AM", "Pending", "akosua.boateng@torghana.gov.gh", "HR")
];

export default function Actions() {
    const [declineOpen, setDeclineOpen] = useState(false);
    const [declineReason, setDeclineReason] = useState("");
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [selectedMonth, setSelectedMonth] = useState('All');
    const [searchQuery, setSearchQuery] = useState("");

    // Filter rows based on month and search query
    const filteredRows = useMemo(() => {
        let filtered = allRows;

        // Filter by month (if implemented)
        if (selectedMonth !== 'All') {
            // Month filtering logic can be added here
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
    }, [selectedMonth, searchQuery]);

    // Calculate statistics
    const stats = useMemo(() => {
        const total = allRows.length;
        const pending = allRows.filter(r => r.status.toLowerCase() === "pending").length;
        return { total, pending };
    }, []);

    const handleDecline = (id: number) => {
        setSelectedRow(id);
        setDeclineReason("");
        setDeclineOpen(true);
    };

    const handleAccept = (id: number) => {
        console.log("Accepted row:", id);
        // In a real app, this would update the backend
    };

    const submitDecline = () => {
        console.log("Declined row:", selectedRow);
        console.log("Reason:", declineReason);
        setDeclineOpen(false);
        setDeclineReason("");
        setSelectedRow(null);
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

                    <TextHeader text='Meeting Actions' />
                    
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
                        Review and manage meeting requests
                    </Typography>
                </Box>
            </Box>

            {/* Statistics Cards */}
            <Stack 
                direction={{ xs: "column", sm: "row" }} 
                spacing={3} 
                sx={{ mb: 4 }}
            >
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <StatCard
                        title="Total Requests"
                        value={stats.total}
                        icon={<FileTextOutlined style={{ fontSize: 24 }} />}
                        color="#1976d2"
                        subtitle="All pending actions"
                    />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <StatCard
                        title="Pending Review"
                        value={stats.pending}
                        icon={<ClockCircleOutlined style={{ fontSize: 24 }} />}
                        color="#ed6c02"
                        subtitle="Awaiting decision"
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
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(e.target.value)}
                        >
                            <MenuItem value="All">
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <FilterOutlined style={{ fontSize: 14 }} />
                                    <span>All Months</span>
                                </Stack>
                            </MenuItem>
                            <MenuItem value="January">January</MenuItem>
                            <MenuItem value="February">February</MenuItem>
                            <MenuItem value="March">March</MenuItem>
                            <MenuItem value="April">April</MenuItem>
                            <MenuItem value="May">May</MenuItem>
                            <MenuItem value="June">June</MenuItem>
                            <MenuItem value="July">July</MenuItem>
                            <MenuItem value="August">August</MenuItem>
                            <MenuItem value="September">September</MenuItem>
                            <MenuItem value="October">October</MenuItem>
                            <MenuItem value="November">November</MenuItem>
                            <MenuItem value="December">December</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
            </MainCard>

            {/* Actions Table */}
            <MainCard
                title={
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <FileTextOutlined />
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            Pending Actions
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
                                <TableCell align="center" sx={{ fontWeight: 600 }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredRows.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} align="center" sx={{ py: 4 }}>
                                        <Stack alignItems="center" spacing={1}>
                                            <InfoCircleOutlined style={{ fontSize: 48, color: "text.secondary" }} />
                                            <Typography color="text.secondary">
                                                No requests found matching your criteria
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
                                            <Stack direction="row" spacing={1.5} justifyContent="center">
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    startIcon={<CheckOutlined />}
                                                    onClick={() => handleAccept(row.id)}
                                                    sx={{
                                                        textTransform: "none",
                                                        borderRadius: 2,
                                                        backgroundColor: "success.main",
                                                        color: "white",
                                                        px: 2,
                                                        "&:hover": {
                                                            backgroundColor: "success.dark",
                                                        }
                                                    }}
                                                >
                                                    Accept
                                                </Button>
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    startIcon={<CloseOutlined />}
                                                    onClick={() => handleDecline(row.id)}
                                                    sx={{
                                                        textTransform: "none",
                                                        borderRadius: 2,
                                                        borderColor: "error.main",
                                                        color: "error.main",
                                                        px: 2,
                                                        "&:hover": {
                                                            backgroundColor: "error.main",
                                                            color: "white",
                                                            borderColor: "error.main",
                                                        }
                                                    }}
                                                >
                                                    Decline
                                                </Button>
                                            </Stack>
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
                open={declineOpen}
                onClose={() => {
                    setDeclineOpen(false);
                    setDeclineReason("");
                    setSelectedRow(null);
                }}
                fullWidth
                maxWidth="sm"
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
                        <CloseCircleOutlined style={{ fontSize: 20, color: "error.main" }} />
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            Reason for Decline
                        </Typography>
                    </Stack>
                </DialogTitle>
                <Divider />
                <DialogContent sx={{ pt: 3 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Please provide a reason for declining this meeting request.
                    </Typography>
                    <TextField
                        autoFocus
                        multiline
                        rows={4}
                        fullWidth
                        placeholder="Enter reason for declining this meeting request..."
                        value={declineReason}
                        onChange={(e) => setDeclineReason(e.target.value)}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "&:hover fieldset": {
                                    borderColor: "error.main",
                                },
                            },
                        }}
                    />
                </DialogContent>
                <Divider />
                <DialogActions sx={{ p: 2.5 }}>
                    <Button
                        onClick={() => {
                            setDeclineOpen(false);
                            setDeclineReason("");
                            setSelectedRow(null);
                        }}
                        sx={{ textTransform: "none" }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={submitDecline}
                        disabled={!declineReason.trim()}
                        sx={{ textTransform: "none", px: 3 }}
                    >
                        Submit Decline
                    </Button>
                </DialogActions>
            </Dialog>
        </SystemBox>
    );
}