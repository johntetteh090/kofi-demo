import { Box, Button, Drawer, TextField, Typography } from "@mui/material";
import React from "react";
import { primaryColor } from "utils/appColors";

interface SecretaryDrawerProps {

    drawerOpen?: boolean;
    closeDrawer?: () => void;
}


const SecretaryDrawer = ({ drawerOpen, closeDrawer }: SecretaryDrawerProps) => {

    return (

        <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={closeDrawer}
            PaperProps={{
                sx: {
                    width: 350,
                    backdropFilter: "blur(18px)",
                    backgroundColor: "white", // frosted
                    // backgroundColor: primaryColor,
                    borderLeft: "1px solid rgba(255,255,255,0.4)",
                    p: 3,
                },
            }}
            ModalProps={{
                BackdropProps: {
                    sx: {
                        backdropFilter: "blur(6px)",
                        backgroundColor: "rgba(92, 34, 34, 0.2)"
                        // backgroundColor: "rgba(25, 118, 210, 0.2)"
                    }
                }
            }}
        >


            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Add a secretary
            </Typography>

            <Typography sx={{ fontSize: 14, mb: 2 }}>
                Enter secretary details.
            </Typography>



            <TextField
                fullWidth
                label="Name"
                placeholder="Enter Name"
                sx={{ mb: 3 }}
            />
            <TextField
                fullWidth
                label="Employee Email"
                placeholder="Enter employee email"
                sx={{ mb: 3 }}
            />

            <TextField
                fullWidth
                label="Employee Staff ID"
                placeholder="Enter employee staff ID"
                sx={{ mb: 3 }}
            />

            <TextField
                fullWidth
                label="Employee Phone Number"
                placeholder="Enter employee phone Number"
                sx={{ mb: 3 }}
            />

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                <Button
                    variant="contained"
                    sx={{
                        textTransform: "none",
                        borderRadius: 2,
                        fontWeight: 600
                    }}
                    onClick={closeDrawer}
                >
                    Save
                </Button>
            </Box>
        </Drawer>
    )
}

export default SecretaryDrawer;