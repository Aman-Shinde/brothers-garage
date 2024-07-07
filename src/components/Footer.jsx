import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import RoomIcon from '@mui/icons-material/Room';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <Box sx={{
            backgroundColor: 'rgb(170, 17, 17)',
            color: '#ffffff',
            padding: '48px 0',
        }}>

            <Box sx={{
                textAlign: 'center',
                marginBottom: '16px',
            }}>
                <Typography variant="h6" component="div" sx={{ marginBottom: '16px' }}>
                    Brothers Automotive
                </Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '16px',
                }}>
                    <IconButton component="a" href="https://www.facebook.com" target="_blank" sx={{ color: '#ffffff' }}>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton component="a" href="https://www.twitter.com" target="_blank" sx={{ color: '#ffffff' }}>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton component="a" href="https://www.linkedin.com" target="_blank" sx={{ color: '#ffffff' }}>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton component="a" href="https://www.instagram.com" target="_blank" sx={{ color: '#ffffff' }}>
                        <InstagramIcon />
                    </IconButton>
                </Box>
            </Box>

            <Box sx={{
                textAlign: 'center',
                padding: '8px',
                borderTop: '1px solid #ffffff',
            }}>
                <Typography variant="body2" component="div">
                    © 2024 Brothers Automotive. All rights reserved.
                </Typography>
            </Box>

        </Box>
    );
}

export default Footer;
