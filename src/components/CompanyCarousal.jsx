import React from 'react'
import { Box, Stack } from '@mui/material';

function CompanyCarousal() {

    const carAndBikeLogos = [
        './company-1.jpg',
        './company-2.jpg',
        './company-3.png',
        './company-4.png',
        './company-5.png',
        './company-6.jpg',
        './company-7.png',
        './company-8.jpg',
        './company-9.jpg',

        './company-1.jpg',
        './company-2.jpg',
        './company-3.png',
        './company-4.png',
        './company-5.png',
        './company-6.jpg',
        './company-7.png',
        './company-8.jpg',
        './company-9.jpg',
      ];

    return (
        <Box sx={{
            width: "100%",
            marginTop: { lg: "48px", md: "48px", sm: "24px", xs: "24px" },
            padding: { lg: "48px 0px", md: "48px 0px", sm: "24px 0px", xs: "24px 0px" }
        }}>


            <Box sx={{ overflowX: 'hidden' }}>
                <Stack
                    sx={{
                        flexDirection: 'row',
                        width: 'calc((100px * 18) + (48px * 18))', // Adjust according to your logo sizes and spacing
                        animation: 'CarLogoScroll 10s linear infinite',
                        '&:hover': { animationPlayState: 'paused' },
                    }}
                >
                    {carAndBikeLogos.map((logo, index) => (
                        <Box key={index} sx={{ margin: {lg: 'auto 48px', md: 'auto 48px', sm: 'auto 36px', xs: 'auto 36px'} }}>
                            <img
                                src={logo}
                                alt={`Car or Bike Logo ${index + 1}`}
                                style={{ width: '100px', height: 'auto' }}
                            />
                        </Box>
                    ))}
                </Stack>
            </Box>

        </Box>
    )
}

export default CompanyCarousal
