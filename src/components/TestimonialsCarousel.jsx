import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Avatar, Container, Grid } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        picture: 'https://via.placeholder.com/150',
        name: 'John Doe',
        experience: 'This is a great service! Highly recommended.',
    },
    {
        picture: 'https://via.placeholder.com/150',
        name: 'Jane Smith',
        experience: 'Amazing experience, will definitely use again.',
    },
    {
        picture: 'https://via.placeholder.com/150',
        name: 'Sam Wilson',
        experience: 'Exceptional quality and fantastic customer service.',
    },
    {
        picture: 'https://via.placeholder.com/150',
        name: 'Sara Lee',
        experience: 'Outstanding support and service!',
    },
    {
        picture: 'https://via.placeholder.com/150',
        name: 'Paul Walker',
        experience: 'I am extremely satisfied with the service provided.',
    },
    {
        picture: 'https://via.placeholder.com/150',
        name: 'Emily Johnson',
        experience: 'High quality and great customer service.',
    },
];

const TestimonialsCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 slides by default
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 900, // Adjust this breakpoint based on your design needs
                settings: {
                    slidesToShow: 1, // Show 1 slide for screens smaller than 960px
                },
            },
        ],
    };

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
                Testimonials
            </Typography>

            <Box sx={{ width: "80%", margin: "0px auto", textAlign: "center" }}>

                <Slider {...settings} >
                    {testimonials.map((testimonial, index) => (
                        <Box key={index} sx={{ padding: '0 10px' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    padding: '20px',
                                    backgroundColor: '#fff',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    minHeight: '250px', // Ensure a minimum height for each card
                                    height: '100%',
                                }}
                            >
                                <Avatar
                                    src={testimonial.picture}
                                    alt={testimonial.name}
                                    sx={{ width: 100, height: 100, marginBottom: '20px' }}
                                />
                                <Typography variant="h6" gutterBottom className="roboto-medium">
                                    {testimonial.name}
                                </Typography>
                                <Typography variant="body1" className="roboto-light-italic font-size-md" >
                                    {testimonial.experience}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Slider>


            </Box>

        </Box>

    );
};

export default TestimonialsCarousel;



