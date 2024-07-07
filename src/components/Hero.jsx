import React from 'react';
import { Box } from '@mui/material'

function Hero() {

    return (
        <Box sx={{
            width: "100%",
            height: { lg: "calc(100vh - 120px)", md: "calc(100vh - 120px)", sm: "calc(100vh - 100px)", xs: "calc(100vh - 100px)" },
        }}>

            <img style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }}
                alt="hero_image"
                src="./hero.jpg"
            />
        </Box>
    )
}

export default Hero
