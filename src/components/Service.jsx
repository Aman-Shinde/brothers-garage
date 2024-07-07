import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import { CarRepairIcon, LocalCarWashIcon, FormatPaintIcon, EngineeringIcon, ElectricMeterIcon, QueryStatsIcon} from '@mui/icons-material';

const cardData = [
    { icon: <CarRepairIcon sx={{fontSize:"70px"}} />, title: 'Auto Repair' },
    { icon: <ElectricMeterIcon sx={{fontSize:"70px"}} />, title: 'Electrical Repair' },
    { icon: <EngineeringIcon sx={{fontSize:"70px"}} />, title: 'Customising' },
    { icon: <FormatPaintIcon sx={{fontSize:"70px"}} />, title: 'Painting and Denting' },
    { icon: <LocalCarWashIcon sx={{fontSize:"70px"}} />, title: 'Washing' },
    { icon: <QueryStatsIcon sx={{fontSize:"70px"}} />, title: 'Auto Diagnostics' }
];

function Service() {
    return (
        <Box sx={{
            width: "100%",
            marginTop: { lg: "48px", md: "48px", sm: "24px", xs: "24px" },
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
                Our Services
            </Typography>

            <Box sx={{ width: "80%", margin: "0px auto", textAlign: "center" }}>

                <Grid container spacing={{lg: 4, md: 4, sm: 4, xs: 4}} justifyContent="center">
                    {cardData.map((card, index) => (
                        <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
                            <Card sx={{ backgroundColor: '#f5f5f5', textAlign: 'center' }}>
                                <CardContent sx={{padding: "48px 16px !important"}}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                                        {card.icon}
                                    </Box>
                                    <Typography variant="h6" className="roboto-regular font-size-md">{card.title}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Box>

        </Box>
    )
}

export default Service
