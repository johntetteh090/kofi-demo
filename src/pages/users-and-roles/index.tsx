import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Box, Button, Dialog, Drawer, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import CustomRadioBtn from "components/CustomRadioBtn";
import TextHeader from "components/Textheaders";
import SecretaryDrawer from "components/user-and-roles/SecretaryDrawer";
import TrustedPersonDrawer from "components/user-and-roles/TrustedPersonDrawer";
import UserRolesTable from "components/UserRolesTable";
import { useState } from "react";
import { primaryColor } from "utils/appColors";

export default function UsersAndRoles() {

    const [openSidebar, setOpenSidebar] = useState(false);
    const [openSecretarySidebar, setOpenSecretarySidebar] = useState(false);
    const [openAdminSidebar, setAdminOpenSidebar] = useState(false);
    const [openSuperAdminSidebar, setSuperAdminOpenSidebar] = useState(false);



    return (

        <>

            <Box>
                <TextHeader text="Users & Roles" />

                <Box sx={{
                    mt: 5, mb: 10,
                }}>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Typography sx={{ fontSize: 16, fontWeight: 400, lineHeight: 0.5 }}>
                            Secretaries
                        </Typography>

                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                                fontWeight: 300,
                                minWidth: 40,       // keeps it square
                                padding: "7px 10px", // tighter for icon-only
                                flex: 'row',
                                gap: 1.5,
                            }}
                            onClick={() => setOpenSecretarySidebar(!openSecretarySidebar)}
                        >


                            <Typography>Add a Secretary</Typography>
                        </Button>

                    </Box>


                    <UserRolesTable
                        dialogMainText={"Delete Secretary"}
                        dialogSubText="Are you sure you want to delete this secretary? 
                    Actions taken cannot be reversed."/>

                    <Box sx={{

                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 9
                    }}>
                        <Typography sx={{ fontSize: 16, fontWeight: 400, }}>
                            Trusted Persons
                        </Typography>



                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                                fontWeight: 300,
                                minWidth: 40,       // keeps it square
                                padding: "7px 10px", // tighter for icon-only
                                flex: 'row',
                                gap: 1.5,
                            }}
                            onClick={() => setOpenSidebar(!openSidebar)}
                        >


                            <Typography>Add a Trusted Person</Typography>
                        </Button>
                    </Box>


                    <UserRolesTable
                        dialogMainText={"Delete trusted Person"}
                        dialogSubText="Are you sure you want to delete this trusted person? 
                    Actions taken cannot be reversed."/>


                    <Box sx={{

                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 9
                    }}>
                        <Typography sx={{ fontSize: 16, fontWeight: 400, }}>
                            Admins
                        </Typography>



                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                                fontWeight: 300,
                                minWidth: 40,       // keeps it square
                                padding: "7px 10px", // tighter for icon-only
                                flex: 'row',
                                gap: 1.5,
                            }}
                            onClick={() => setAdminOpenSidebar(!openAdminSidebar)}
                        >


                            <Typography>Add an Admin</Typography>
                        </Button>
                    </Box>

                    <UserRolesTable
                        dialogMainText={"Delete an admin"}
                        dialogSubText="Are you sure you want to delete this admin? 
                    Actions taken cannot be reversed."/>


                    <Box sx={{

                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 9
                    }}>
                        <Typography sx={{ fontSize: 16, fontWeight: 400, }}>
                            Super Admins
                        </Typography>



                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                                fontWeight: 300,
                                minWidth: 40,       // keeps it square
                                padding: "7px 10px", // tighter for icon-only
                                flex: 'row',
                                gap: 1.5,
                            }}
                            onClick={() => setSuperAdminOpenSidebar(!openSuperAdminSidebar)}
                        >


                            <Typography>Add a Super Admin</Typography>
                        </Button>
                    </Box>

                    <UserRolesTable
                        dialogMainText={"Delete a super admin"}
                        dialogSubText="Are you sure you want to delete this super admin? 
                    Actions taken cannot be reversed."/>


                </Box>
            </Box>



            <TrustedPersonDrawer
                drawerOpen={openSidebar}
                closeDrawer={() => setOpenSidebar(!openSidebar)} />

            <SecretaryDrawer
                drawerOpen={openSecretarySidebar}
                closeDrawer={() => setOpenSecretarySidebar(!openSecretarySidebar)} />

            <SecretaryDrawer
                drawerOpen={openAdminSidebar}
                closeDrawer={() => setAdminOpenSidebar(!openAdminSidebar)}
                title="Add an admin"
                subtitle="Add an admin to manage the platform" />

            <SecretaryDrawer
                drawerOpen={openSuperAdminSidebar}
                closeDrawer={() => setSuperAdminOpenSidebar(!openSuperAdminSidebar)}
                title="Add a super admin"
                subtitle="Add a super admin to manage the platform" />




        </>

    );
}