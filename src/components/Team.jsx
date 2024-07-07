import React from 'react';
import { Box, Grid, Typography, Avatar } from '@mui/material';

const teamMembers = [
    {
        name: 'John Doe',
        designation: 'CEO',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Jane Smith',
        designation: 'CTO',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Mike Johnson',
        designation: 'CFO',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Emily Davis',
        designation: 'COO',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'David Brown',
        designation: 'CMO',
        image: 'https://via.placeholder.com/150',
    }
];

const Team = () => {
    return (
        <Box sx={{
            width: "100%",
            marginTop: { lg: "48px", md: "48px", sm: "24px", xs: "24px" },
            backgroundColor: "rgb(170, 17, 17)",
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
                Our Team
            </Typography>

            <Box sx={{ width: "80%", margin: "0px auto", textAlign: "center" }}>

                <Grid container spacing={{lg: 4, md: 4, sm: 2, xs: 2}} sx={{justifyContent: "center"}}>
                    {teamMembers.map((member, index) => (
                        <Grid item lg={4} md={4} sm={6} xs={6} key={index}>
                            <Box sx={{ padding: 2 }}>
                                <Avatar
                                    alt={member.name}
                                    src={member.image}
                                    sx={{ width: {lg: "150px", md: "150px", sm: "100px", xs: "100px"}, height: {lg: "150px", md: "150px", sm: "100px", xs: "100px"}, margin: 'auto' }}
                                />
                                <Typography className="roboto-regular font-size-md" variant="h6" sx={{ marginTop: 2 }}>
                                    {member.name}
                                </Typography>
                                <Typography className="roboto-light-italic font-size-sm" variant="body1">{member.designation}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

            </Box>

        </Box>
    );
};

export default Team;
