import React from 'react'
import { Grid, Box, Typography, Table, TableBody, TableCell, TableRow } from '@mui/material';

function Business() {

    const workingHours = [
        { day: 'Monday', hours: '9 AM - 6 PM' },
        { day: 'Tuesday', hours: '9 AM - 6 PM' },
        { day: 'Wednesday', hours: '9 AM - 6 PM' },
        { day: 'Thursday', hours: '9 AM - 6 PM' },
        { day: 'Friday', hours: '9 AM - 6 PM' },
        { day: 'Saturday', hours: '9 AM - 6 PM' },
        { day: 'Sunday', hours: '9 AM - 6 PM' }
    ];

    const boxStyles = {
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        minHeight: "350px"
    };

    return (
        <Box sx={{
            width: "100%",
            marginTop: { lg: "48px", md: "48px", sm: "24px", xs: "24px" },
            backgroundColor: "rgb(170, 17, 17)",
            padding: { lg: "48px 0px", md: "48px 0px", sm: "24px 0px", xs: "24px 0px" }
        }}>

            <Typography
                variant="h2"
                component="h1"
                className="special-elite-regular font-size-xl"
                sx={{
                    marginBottom: { lg: "calc(24px + 32px)", md: "calc(24px + 32px)", sm: "calc(12px + 32px)", xs: "calc(12px + 32px)" },
                    textAlign: "center"
                }}
            >
                Our Business
            </Typography>

            <Box sx={{ width: "80%", margin: "0px auto", textAlign: "center" }}>

                <Grid container spacing={3}>
                    {/* Address Section */}
                    <Grid item xs={12} md={4}>
                        <Box sx={boxStyles}>
                            <Typography variant="h6" gutterBottom>
                                Brother's Automotive <br /> <br />
                            </Typography>
                            <Typography variant="body1">
                                Hinjawadi, Phase 2, Wipro Circle,<br />
                                Near Bharat Petrol Pump,<br />
                                Pune 411057<br /><br />

                                Phone : +91 9999999999<br />
                                <span style={{ visibility: "hidden" }}>Phone :</span> +91 9999999999<br /><br />

                                Email : example@gmail.com
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Working Hours Section */}
                    <Grid item xs={12} md={4}>
                        <Box sx={boxStyles}>
                            <Typography variant="h6" gutterBottom>
                                Working Hours <br /> <br />
                            </Typography>
                            <Table sx={{ border: '1px solid #ffffff' }}>
                                <TableBody>
                                    {workingHours.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell sx={{ border: '1px solid #000000', padding: '4px', color: '#000000', textAlign: 'center' }}>
                                                {row.day}
                                            </TableCell>
                                            <TableCell sx={{ border: '1px solid #000000', padding: '4px', color: '#000000', textAlign: 'center' }}>
                                                {row.hours}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Grid>

                    {/* Map Section */}
                    <Grid item xs={12} md={4}>
                        <Box sx={boxStyles}>
                            <Box sx={{ height: '300px', width: '100%' }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5866.47168782132!2d73.72080461883814!3d18.59151955532765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bba4d6711b7b%3A0xd1a18bc98a956661!2sBrother&#39;s%20automotive%20-%20car%20service%20%2F%20bike%20service%20%2F%20garage!5e0!3m2!1sen!2sin!4v1720352736141!5m2!1sen!2sin" style={{ border: 0, width: "100%", height: "100%" }} ></iframe>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Box>

        </Box>
    )
}

export default Business
