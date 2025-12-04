import React, { useState, useMemo } from "react";
import {
    Box,
    Button,
    Typography,
    Avatar,
    Stack,
    Card,
    Grid,
    Divider,
} from "@mui/material";
import { Box as SystemBox } from "@mui/system";
import MainCard from "components/MainCard";
import {
    TeamOutlined,
    UserOutlined,
    UserAddOutlined,
    SafetyOutlined,
    CrownOutlined,
    FileTextOutlined,
    PlusOutlined,
} from "@ant-design/icons";
import SecretaryDrawer from "components/user-and-roles/SecretaryDrawer";
import TrustedPersonDrawer from "components/user-and-roles/TrustedPersonDrawer";
import UserRolesTable from "components/UserRolesTable";
import TextHeader from "components/Textheaders";

export default function UsersAndRoles() {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [openSecretarySidebar, setOpenSecretarySidebar] = useState(false);
    const [openAdminSidebar, setAdminOpenSidebar] = useState(false);
    const [openSuperAdminSidebar, setSuperAdminOpenSidebar] = useState(false);

    // Mock data for statistics - in real app, this would come from API
    const stats = useMemo(() => {
        return {
            secretaries: 5,
            trustedPersons: 8,
            admins: 3,
            superAdmins: 2,
            total: 18,
        };
    }, []);

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

    const RoleSection = ({
        title,
        icon,
        color,
        count,
        onAdd,
        dialogMainText,
        dialogSubText,
    }: {
        title: string;
        icon: React.ReactNode;
        color: string;
        count: number;
        onAdd: () => void;
        dialogMainText: string;
        dialogSubText: string;
    }) => (
        <MainCard
            sx={{ mb: 4 }}
            title={
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: "100%" }}>
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                        {icon}
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            {title}
                        </Typography>
                        <Box
                            sx={{
                                px: 1.5,
                                py: 0.5,
                                borderRadius: 2,
                                bgcolor: `${color}15`,
                                color: color,
                                fontWeight: 600,
                                fontSize: 12,
                            }}
                        >
                            {count}
                        </Box>
                    </Stack>
                    <Button
                        variant="contained"
                        startIcon={<PlusOutlined />}
                        onClick={onAdd}
                        sx={{
                            textTransform: "none",
                            borderRadius: 2,
                            fontWeight: 600,
                            px: 3,
                            py: 1,
                        }}
                    >
                        Add {title.slice(0, -1)}
                    </Button>
                </Stack>
            }
        >
            <UserRolesTable
                dialogMainText={dialogMainText}
                dialogSubText={dialogSubText}
            />
        </MainCard>
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

                    <TextHeader text='Users & Roles Management' />
                    
                    <Typography
                        sx={{
                            color: "text.secondary",
                            fontSize: 14,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <TeamOutlined style={{ fontSize: 14 }} />
                        Manage system users and their roles
                    </Typography>
                </Box>
            </Box>

            {/* Statistics Cards */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        title="Total Users"
                        value={stats.total}
                        icon={<TeamOutlined style={{ fontSize: 24 }} />}
                        color="#1976d2"
                        subtitle="All system users"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        title="Secretaries"
                        value={stats.secretaries}
                        icon={<FileTextOutlined style={{ fontSize: 24 }} />}
                        color="#2e7d32"
                        subtitle="Meeting coordinators"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        title="Trusted Persons"
                        value={stats.trustedPersons}
                        icon={<UserOutlined style={{ fontSize: 24 }} />}
                        color="#ed6c02"
                        subtitle="Authorized visitors"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        title="Admins"
                        value={stats.admins + stats.superAdmins}
                        icon={<SafetyOutlined style={{ fontSize: 24 }} />}
                        color="#9c27b0"
                        subtitle="System administrators"
                    />
                </Grid>
            </Grid>

            {/* Role Sections */}
            <RoleSection
                title="Secretaries"
                icon={<FileTextOutlined style={{ fontSize: 20, color: "#2e7d32" }} />}
                color="#2e7d32"
                count={stats.secretaries}
                onAdd={() => setOpenSecretarySidebar(true)}
                dialogMainText="Delete Secretary"
                dialogSubText="Are you sure you want to delete this secretary? Actions taken cannot be reversed."
            />

            <RoleSection
                title="Trusted Persons"
                icon={<UserOutlined style={{ fontSize: 20, color: "#ed6c02" }} />}
                color="#ed6c02"
                count={stats.trustedPersons}
                onAdd={() => setOpenSidebar(true)}
                dialogMainText="Delete Trusted Person"
                dialogSubText="Are you sure you want to delete this trusted person? Actions taken cannot be reversed."
            />

            <RoleSection
                title="Admins"
                icon={<SafetyOutlined style={{ fontSize: 20, color: "#9c27b0" }} />}
                color="#9c27b0"
                count={stats.admins}
                onAdd={() => setAdminOpenSidebar(true)}
                dialogMainText="Delete Admin"
                dialogSubText="Are you sure you want to delete this admin? Actions taken cannot be reversed."
            />

            <RoleSection
                title="Super Admins"
                icon={<CrownOutlined style={{ fontSize: 20, color: "#f57c00" }} />}
                color="#f57c00"
                count={stats.superAdmins}
                onAdd={() => setSuperAdminOpenSidebar(true)}
                dialogMainText="Delete Super Admin"
                dialogSubText="Are you sure you want to delete this super admin? Actions taken cannot be reversed."
            />

                   



            {/* Drawers */}
            <TrustedPersonDrawer
                drawerOpen={openSidebar}
                closeDrawer={() => setOpenSidebar(false)}
            />

            <SecretaryDrawer
                drawerOpen={openSecretarySidebar}
                closeDrawer={() => setOpenSecretarySidebar(false)}
            />

            <SecretaryDrawer
                drawerOpen={openAdminSidebar}
                closeDrawer={() => setAdminOpenSidebar(false)}
                title="Add an Admin"
                subtitle="Add an admin to manage the platform"
            />

            <SecretaryDrawer
                drawerOpen={openSuperAdminSidebar}
                closeDrawer={() => setSuperAdminOpenSidebar(false)}
                title="Add a Super Admin"
                subtitle="Add a super admin to manage the platform"
            />
        </SystemBox>
    );
}