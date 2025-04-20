import * as React from 'react';
import { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Divider,
  Box,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AppleIcon from '@mui/icons-material/Apple';

// Google logo component
const GoogleLogo = () => (
  <svg width="20" height="20" viewBox="0 0 533.5 544.3">
    <path
      fill="#4285F4"
      d="M533.5 278.4c0-17.7-1.6-34.8-4.6-51.3H272v97h146.9c-6.3 33.7-25 62.3-53.3 81.2v67.3h86.2c50.5-46.5 81.7-115.1 81.7-194.2z"
    />
    <path
      fill="#34A853"
      d="M272 544.3c72.6 0 133.5-24 178-65.4l-86.2-67.3c-23.9 16.1-54.5 25.5-91.8 25.5-70.6 0-130.5-47.7-151.9-111.8H31.6v70.3c44.7 88.3 137.6 148.7 240.4 148.7z"
    />
    <path
      fill="#FBBC04"
      d="M120.1 325.3c-10.5-31.7-10.5-65.7 0-97.4V157.6H31.6c-38.6 76.9-38.6 167.6 0 244.5l88.5-70.3z"
    />
    <path
      fill="#EA4335"
      d="M272 107.7c39.4-.6 77.1 13.8 106.2 39.6l79.3-79.3C414.7 23.7 345.9-1.1 272 0 169.2 0 76.3 60.4 31.6 148.7l88.5 70.3c21.4-64.1 81.3-111.8 151.9-111.3z"
    />
  </svg>
);

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // Form states
  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setShowPassword(false);
    setForm({
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`${isLogin ? 'Logging in' : 'Signing up'} with data: ` + JSON.stringify(form, null, 2));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: { xs: 6, md: 10 } }}>
      <Paper elevation={4} sx={{ borderRadius: 3, p: { xs: 3, sm: 4 } }}>
        <Typography variant="h4" align="center" fontWeight={600} gutterBottom>
          {isLogin ? 'Log in' : 'Sign up'}
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary" mb={3}>
          {isLogin ? 'Welcome back! Please log in.' : 'Create a new account to get started'}
        </Typography>

        <form onSubmit={handleSubmit} noValidate>
          <Stack spacing={2}>
            {!isLogin && (
              <>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  value={form.name}
                  onChange={handleChange('name')}
                />
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  required
                  value={form.username}
                  onChange={handleChange('username')}
                />
              </>
            )}

            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={form.email}
              onChange={handleChange('email')}
            />

            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              fullWidth
              required
              value={form.password}
              onChange={handleChange('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {!isLogin && (
              <TextField
                label="Confirm Password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                fullWidth
                required
                value={form.confirmPassword}
                onChange={handleChange('confirmPassword')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ borderRadius: '30px', py: 1.3, fontWeight: 600 }}
            >
              {isLogin ? 'Sign in' : 'Sign up'}
            </Button>

            <Divider>OR</Divider>

            <Button
              variant="outlined"
              fullWidth
              startIcon={<GoogleLogo />}
              sx={{ borderRadius: '30px', textTransform: 'none' }}
            >
              Continue with Google
            </Button>

            <Button
              variant="outlined"
              fullWidth
              startIcon={<AppleIcon />}
              sx={{ borderRadius: '30px', textTransform: 'none' }}
            >
              Continue with Apple
            </Button>
          </Stack>
        </form>

        {/* Bottom toggle text */}
        <Box mt={3} textAlign="center">
          <Typography variant="body2">
            {isLogin ? (
              <>
                Don’t have an account?{' '}
                <Box
                  component="span"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 500,
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                  onClick={handleToggle}
                >
                  Create one
                </Box>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Box
                  component="span"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 500,
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                  onClick={handleToggle}
                >
                  Log in
                </Box>
              </>
            )}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}