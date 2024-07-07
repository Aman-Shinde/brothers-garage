import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

function About() {
    return (
        <Box sx={{
            width: "100%",
            marginTop: { lg: "48px", md: "48px", sm: "24px", xs: "24px" },
            padding: { lg: "48px 0px", md : "48px 0px", sm: "24px 0px", xs: "24px 0px" }
        }}>

            <Typography
                variant="h2"
                component="h1"
                className="special-elite-regular font-size-xl"
                sx={{
                    marginBottom: { lg: "24px", md: "24px", sm: "12px", xs: "12px" },
                    textAlign: "center"
                }}
            >
                About Us
            </Typography>

            <Stack sx={{
                width: "80%",
                flexDirection: { lg: "row", md: "row", sm: "column-reverse", xs: "column-reverse" },
                justifyContent: "center",
                alignItems: "center",
                margin: "0px auto"
            }}>

                <Box sx={{
                    width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
                    marginRight: {lg: "24px", md: "24px", sm: "0px", xs: "0px"}
                }}>

                    <Typography className="roboto-medium font-size-lg" variant="h3" component="h2" color="initial" my={3}>
                        About <strong style={{color: "rgb(170, 17, 17)"}}> Brother's Automotive</strong>
                    </Typography>

                    <Typography className="roboto-regular font-size-md" variant="body1" color="initial" mb={2}>
                        Here at <span style={{color: "rgb(170, 17, 17)"}}> Brother's Automotive</span>, we ensure to provide the right solutions to each and every one of our customers. Our team of experienced professionals understand vehicles and acknowledge the people who drive them. We use state-of-the-art technologies and provide high-quality products from trusted brands, adding to your overall Car/Bike care experience.
                    </Typography>

                    <Typography className="roboto-regular font-size-md" variant="body1" color="initial">
                        When you need car repair from the specialists, Professional Brother's Automotive is at Hinjawadi Phase 2, Near Grand Highstreet Mall. To schedule an appointment or have inquiries, don’t hesitate to get in touch with us at +91 7758060594.
                    </Typography>

                </Box>

                <Box sx={{
                    width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" }
                }}>

                    <img alt="about-us-image" src="./about.jpg" style={{
                        width: "100%",
                        height: "auto",
                        aspectRatio: "0.9",
                        objectFit: "cover",
                    }} />

                </Box>

            </Stack>

        </Box>
    )
}

export default About
