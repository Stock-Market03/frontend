// src/components/StockTrackLogo.jsx
import React from 'react';
import { Typography, Box } from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const StockTrackLogo = () => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <ShowChartIcon sx={{ color: '#10b981', fontSize: 36 }} />
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontWeight: 'bold',
          color: 'white',
          fontFamily: `'Segoe UI', 'Roboto', sans-serif`,
          letterSpacing: 1,
        }}
      >
        Stock Track Nepal
      </Typography>
    </Box>
  );
};

export default StockTrackLogo;
