import React from 'react';
import { Box, Stack, Typography } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';

import RoomIcon from '@mui/icons-material/Room';

function Header() {
    return (
        <Box>

            <Stack sx={{
                flexDirection: { lg: "row", md: "row", sm: "row", xs: "row" },
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                padding: "8px 16px",
                height: { lg: "120px", md: "120px", sm: "100px", xs: "100px" }
            }}>

                <Box sx={{
                    display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
                    flexDirection: "row",
                    alignItems: "center"
                }}>

                    <RoomIcon />

                    <Box sx={{ marginLeft: "8px" }}>

                        <Typography className="special-elite-regular"
                            variant="subtitle2"
                            component="a"
                            href="https://www.google.com/maps/dir//Hinjawadi+Phase+II,+Hinjawadi+Rajiv+Gandhi+Infotech+Park,+Hinjawadi,+Pimpri-Chinchwad,+Maharashtra+411057/@18.5946133,73.6412129,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2bba4d6711b7b:0xd1a18bc98a956661!2m2!1d73.7236146!2d18.5946312?entry=ttu"
                            target="_blank"
                            sx={{
                                display: "block",
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Hinjawadi, Phase 2, Wipro Circle,
                        </Typography>

                        <Typography className="special-elite-regular"
                            variant="subtitle2"
                            component="a"
                            href="https://www.google.com/maps/dir//Hinjawadi+Phase+II,+Hinjawadi+Rajiv+Gandhi+Infotech+Park,+Hinjawadi,+Pimpri-Chinchwad,+Maharashtra+411057/@18.5946133,73.6412129,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2bba4d6711b7b:0xd1a18bc98a956661!2m2!1d73.7236146!2d18.5946312?entry=ttu"
                            target="_blank"
                            sx={{
                                display: "block",
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Near Bharat Petrol Pump,
                        </Typography>

                        <Typography className="special-elite-regular"
                            variant="subtitle2"
                            component="a"
                            href="https://www.google.com/maps/dir//Hinjawadi+Phase+II,+Hinjawadi+Rajiv+Gandhi+Infotech+Park,+Hinjawadi,+Pimpri-Chinchwad,+Maharashtra+411057/@18.5946133,73.6412129,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2bba4d6711b7b:0xd1a18bc98a956661!2m2!1d73.7236146!2d18.5946312?entry=ttu"
                            target="_blank"
                            sx={{
                                display: "block",
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Pune 411057
                        </Typography>

                    </Box>

                </Box>

                <Box sx={{ height: "100%" }}>

                    <img src="./logo.jpg" alt="brand_logo" style={{ height: "100%", mixBlendMode: "color-burn" }} />

                </Box>

                <Box>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: "8px"
                    }}>
                        <CallIcon />
                        <Typography className="special-elite-regular"
                            variant="subtitle2"
                            component="a"
                            href="tel:+917758060594"
                            sx={{
                                marginLeft: "4px",
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            + 91 7758060594
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <CallIcon />
                        <Typography className="special-elite-regular"
                            variant="subtitle2"
                            component="a"
                            href="tel:+918626075506"
                            sx={{
                                marginLeft: "4px",
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            + 91 8626075506
                        </Typography>
                    </Box>

                </Box>

            </Stack>

        </Box>
    )
}

export default Header
