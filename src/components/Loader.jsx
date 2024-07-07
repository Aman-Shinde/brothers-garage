import React from 'react';
import { Box } from '@mui/material';

const Loader = () => {
    return (
        <Box sx={{ width: '50px', margin: 'calc(50vh - 25px) auto' }}>
            <Box className="loader"></Box>
        </Box>
    );
};

export default Loader;
