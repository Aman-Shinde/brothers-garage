import React, { useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';

const galleryData = [
    { src: './work-1.jpg', alt: 'Work 1' },
    { src: './work-2.jpg', alt: 'Work 2' },
    { src: './work-3.jpg', alt: 'Work 3' },
    { src: './work-4.jpg', alt: 'Work 4' },
    { src: './work-5.jpg', alt: 'Work 5' },
    { src: './work-6.jpg', alt: 'Work 6' },
    { src: './work-1.jpg', alt: 'Work 1' },
    { src: './work-2.jpg', alt: 'Work 2' },
    { src: './work-3.jpg', alt: 'Work 3' },
    { src: './work-4.jpg', alt: 'Work 4' },
    { src: './work-5.jpg', alt: 'Work 5' },
    { src: './work-6.jpg', alt: 'Work 6' },
];

function Work() {

    const [visibleImages, setVisibleImages] = useState(6);

    const handleLoadMore = () => {
        setVisibleImages((prevVisibleImages) => prevVisibleImages + 3);
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
                    marginBottom: { lg: "24px", md: "24px", sm: "12px", xs: "12px" },
                    textAlign: "center"
                }}
            >
                Our Work
            </Typography>

            <Box sx={{ width: "80%", margin: "0px auto", textAlign: "center" }}>

                <Grid container spacing={4} justifyContent="center">
                    {galleryData.slice(0, visibleImages).map((image, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                component="img"
                                src={image.src}
                                alt={image.alt}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    aspectRatio: '1.5',
                                    objectFit: 'cover'
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>

                {visibleImages < galleryData.length && (
                    <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                        <Button
                            variant="outlined"
                            onClick={handleLoadMore}
                            sx={{
                                backgroundColor: 'white',
                                color: 'black',
                                '&:hover': {
                                    backgroundColor: 'black',
                                    color: 'white',
                                },
                            }}
                        >
                            Load More
                        </Button>
                    </Box>
                )}

            </Box>

        </Box>
    )
}

export default Work
