
import React, { useState } from 'react';
import {
  Container, Typography, TextField, MenuItem, Paper,
  Divider, Button, Box, InputAdornment, Stack,
} from '@mui/material';

const Stocks = () => {
  const [stock, setStock] = useState({
    name: '', quantity: '', price: '', sector: '', description: '',
  });

  const handleChange = (e) => {
    setStock({ ...stock, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        Buy / Edit Stock
      </Typography>

      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <form>
          <Stack spacing={3}>
            <TextField label="Stock Name" variant="filled" fullWidth name="name"
              value={stock.name} onChange={handleChange} />
            <TextField label="Quantity" type="number" variant="filled" fullWidth name="quantity"
              value={stock.quantity} onChange={handleChange} />
            <TextField label="Price" type="number" variant="filled" fullWidth name="price"
              value={stock.price} onChange={handleChange}
              InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }} />
            <TextField label="Sector" select variant="filled" fullWidth name="sector"
              value={stock.sector} onChange={handleChange}>
              {['Tech', 'Finance', 'Health'].map(option => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
              ))}
            </TextField>
            <TextField label="Description" multiline rows={3} variant="filled"
              fullWidth name="description" value={stock.description} onChange={handleChange} />
            <Divider />
            <Box display="flex" justifyContent="space-between">
              <Button variant="outlined">Cancel</Button>
              <Button variant="contained">Buy Stock</Button>
            </Box>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default Stocks;



