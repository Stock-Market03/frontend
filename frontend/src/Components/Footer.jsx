import React from 'react';
import { Box, Container, Typography, Stack, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, GitHub } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0f172a',
        color: '#fff',
        py: 6,
        mt: 0,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
        >
          {/* Logo or Brand */}
          <Typography variant="h6" fontWeight="bold">
            InvestPro
          </Typography>

          {/* Navigation Links */}
          <Stack direction="row" spacing={4}>
            <Link href="#" color="inherit" underline="hover">
              Home
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Features
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Pricing
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Contact
            </Link>
          </Stack>

          {/* Social Icons */}
          <Stack direction="row" spacing={2}>
            <IconButton color="inherit" href="https://facebook.com">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" href="https://linkedin.com">
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit" href="https://github.com">
              <GitHub />
            </IconButton>
          </Stack>
        </Stack>

        {/* Copyright */}
        <Typography variant="body2" align="center" sx={{ mt: 4, color: 'grey.400' }}>
          © {new Date().getFullYear()} InvestPro. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
