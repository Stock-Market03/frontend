import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
  InputBase,
  useMediaQuery,
  useTheme,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ComplaintIcon from '@mui/icons-material/ReportProblem';
import SearchIcon from '@mui/icons-material/Search';
import StockTrackLogo from './StockTrackLogo'; // Adjust the path if needed


function Appbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const menuItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Properties', icon: <InfoIcon /> },
    { text: 'Help-Center', icon: <ComplaintIcon /> },
    { text: 'Contacts', icon: <ContactMailIcon /> },
  ];

  const renderMenuItems = (isMobileView = false) => (
    <List
      sx={{
        display: 'flex',
        flexDirection: isMobileView ? 'column' : 'row',
        gap: isMobileView ? 0 : '10px',
        width: '100%',
      }}
    >
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.text}
          sx={{
            width: isMobileView ? 'auto' : 'fit-content',
            '&:hover': {
              background: 'rgba(255,255,255,0.2)',
            },
          }}
        >
          {isMobileView && (
            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
          )}
          <ListItemText
            primary={item.text}
            sx={{
              color: 'white',
              '& .MuiTypography-root': {
                fontWeight: 'bold',
              },
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="static"
        sx={{
          background: '#1e293b',
          width: '100vw',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 2,
          }}
        >
          {/* Mobile Menu Icon */}
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,
              display: { xs: 'block', md: 'none' },
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
           <IconButton
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mr: 'auto',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease',
                  },
                }}
              >
                <StockTrackLogo />
              </IconButton>


          {/* Desktop Menu Items */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: '10px',
              mr: 'auto',
              ml: 2,
            }}
          >
            {renderMenuItems(false)}
          </Box>

          {/* Search Bar & Profile */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: 1,
                px: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.3)',
                },
              }}
            >
              <SearchIcon sx={{ color: 'white', mr: 1 }} />
              <InputBase
                placeholder="Search…"
                sx={{
                  color: 'white',
                  width: 150,
                }}
              />
            </Box>
            <IconButton
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.2)',
                },
              }}
            >
              <Avatar
                src="https://i.pravatar.cc/300"
                alt="Profile"
                sx={{ width: 32, height: 32 }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            background: 'linear-gradient(135deg, #3494E6, #EC6EAD)',
            color: 'white',
          },
        }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          {renderMenuItems(true)}
        </Box>
      </Drawer>
    </Box>
  );
}

export default Appbar;
