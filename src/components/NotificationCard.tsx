import { Box, Typography } from '@mui/material';
import React from 'react';

const NotificationCard = () => {
    return (
        <Box sx={{ marginBottom: 3 }}>
            <Box sx={{
                backgroundColor: 'white',
                borderRadius: 4,
                paddingX: 2,
                paddingY: 2,
                // maxHeight: '100px',
            }}>
                <p
                    style={{
                        fontSize: 14,
                        color: 'black',
                        fontWeight: 500,
                        lineHeight: 0.5,   // smaller = tighter spacing

                    }}
                >Eugene Kofi Danso</p>
                <p
                    style={{
                        fontSize: 11,
                        color: 'rgba(0,0,0,0.5)',
                        lineHeight: 0.1,   // smaller = tighter spacing
                    }}
                    >kofidanso@torghana.gov.gh</p>

                <p
                    style={{
                        fontSize: 14,
                        color: 'rgba(0,0,0,0.9)',
                        lineHeight: 0.1,   // smaller = tighter spacing
                        marginTop: 29
                    }}
                >Your appointment has been successfully scheduled for 26 September 2025 at 10:00 AM. We look forward to meeting you at the appointed time. Thank you.

                </p>

                <Box sx={{
                    marginTop: 3,
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "end",
                }}>

                    <Typography sx={{
                        fontSize: 12, fontWeight: 300,
                        color: 'rgba(0,0,0,0.4)'
                    }}>28 Nov 2025 - 2:30pm</Typography>

                </Box>

            </Box>


        </Box>
    )
}

export default NotificationCard;