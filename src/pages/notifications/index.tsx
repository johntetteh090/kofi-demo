import { CheckOutlined, CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Box, Button, Drawer, TextField, Typography } from '@mui/material';
import CustomRadioBtn from 'components/CustomRadioBtn';
import NotificationCard from 'components/NotificationCard';
import TextHeader from 'components/Textheaders';
import React, { useState } from 'react';
import { primaryColor } from 'utils/appColors';


export default function Notifications() {

    const [openSidebar, setOpenSidebar] = useState(false);
    const [selected, setSelected] = React.useState("accepted");

    return (
        <Box
        sx={{
            // px: 7,
            mb: 3
        }}>
            {/* Top Bar */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    py: 3,
                }}
            >

                <TextHeader text={'Notifications'} />
                

                {/* Right Button */}
                <Button
                    variant="contained"
                    startIcon={<PlusOutlined />}
                    onClick={() => setOpenSidebar(true)}
                    sx={{
                        textTransform: "none",
                        borderRadius: 2,
                        fontWeight: 600
                    }}
                >
                    Set Notification Template
                </Button>
            </Box>

            {/* Notification Cards */}
            {
                Array.from({ length: 9 }).map((_, index) => (
                    <NotificationCard key={index} />
                ))
            }

            {/* =========================== */}
            {/*       BLUR SIDE MENU        */}
            {/* =========================== */}
            <Drawer
                anchor="right"
                open={openSidebar}
                onClose={() => setOpenSidebar(false)}
                PaperProps={{
                    sx: {
                        width: 350,
                        backdropFilter: "blur(18px)",
                        backgroundColor: "white", // frosted
                        borderLeft: "1px solid rgba(255,255,255,0.4)",
                        p: 3,
                    },
                }}
                ModalProps={{
                    BackdropProps: {
                        sx: {
                            backdropFilter: "blur(6px)",
                            backgroundColor: "rgba(0,0,0,0.2)"
                        }
                    }
                }}
            >

                
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    Notification Template
                </Typography>

                <Typography sx={{ fontSize: 14, mb: 2 }}>
                    Choose a state.
                </Typography>

                <CustomRadioBtn
                value="accepted"
                selected={selected}
                onChange={setSelected}
                label="Accepted"
                icon={<CheckOutlined />}
                activeColor= {primaryColor}
            />

            <CustomRadioBtn
                value="Decline"
                selected={selected}
                onChange={setSelected}
                label="Decline"
                icon={<CloseOutlined />}
                activeColor= {primaryColor}
            />

                <TextField
                    fullWidth
                    multiline
                    minRows={4}
                    placeholder="Write your notification message..."
                />

                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                    <Button
                        variant="contained"
                        sx={{
                            textTransform: "none",
                            borderRadius: 2,
                            fontWeight: 600
                        }}
                        onClick={() => setOpenSidebar(false)}
                    >
                        Save
                    </Button>
                </Box>
            </Drawer>
        </Box>
    );

}