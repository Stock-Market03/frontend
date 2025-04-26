import React from 'react';
import { Box, Typography, Button, Container, Stack, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // 1
import Herosectionimg1 from '../assets/Herosectionimg1.jpg'; 
import { Link } from 'react-router-dom';//
<Link to="/admin">
  <button>Go to Admin Page</button>
</Link>

const HeroSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();


  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #0f172a, #1e293b)',
        color: '#fff',
        py: { xs: 4, md: 8 },
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left Content */}
          <Box flex={1}>
            <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
              Make Smarter Investments
            </Typography>
            <Typography variant="h6" color="grey.300" sx={{ mb: 4 }}>
              Track live markets, get real-time insights, and maximize your returns with our powerful platform.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="contained"
              color="success"
              size="large"
              onClick={() => navigate('/stocks')}
            >
              Get Started
            </Button>
            <Button variant="outlined" color="inherit" size="large">
              Explore Features
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={() => navigate('/admin')}
            >
              Admin Page
            </Button>
          </Stack>

          </Box>

          {/* Right Visual */}
          <Box flex={1} mt={{ xs: 6, md: 0 }}>
            <img
              src={Herosectionimg1}
              alt="Investment Visualization"
              style={{
                width: '100%',
                maxWidth: 500,
                borderRadius: 16,
                boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
