import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const Stocks = () => {
  const [stocks, setStocks] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentStock, setCurrentStock] = useState({ name: '', quantity: '', price: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleOpen = () => {
    setCurrentStock({ name: '', quantity: '', price: '' });
    setEditingIndex(null);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setCurrentStock({ ...currentStock, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      const updated = [...stocks];
      updated[editingIndex] = currentStock;
      setStocks(updated);
    } else {
      setStocks([...stocks, currentStock]);
    }
    handleClose();
  };

  const handleEdit = (index) => {
    setCurrentStock(stocks[index]);
    setEditingIndex(index);
    setOpen(true);
  };

  const handleDelete = (index) => {
    const updated = stocks.filter((_, i) => i !== index);
    setStocks(updated);
  };

  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Buy & Sell Stocks
      </Typography>

      <Button variant="contained" color="primary" onClick={handleOpen} sx={{ my: 2 }}>
        + Buy Stock
      </Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Quantity</b></TableCell>
            <TableCell><b>Price</b></TableCell>
            <TableCell align="right"><b>Actions</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stocks.map((stock, index) => (
            <TableRow key={index}>
              <TableCell>{stock.name}</TableCell>
              <TableCell>{stock.quantity}</TableCell>
              <TableCell>${stock.price}</TableCell>
              <TableCell align="right">
                <Button size="small" onClick={() => handleEdit(index)}>Edit</Button>
                <Button size="small" color="error" onClick={() => handleDelete(index)}>Sell</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editingIndex !== null ? 'Edit Stock' : 'Buy New Stock'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Stock Name"
            name="name"
            fullWidth
            value={currentStock.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Quantity"
            name="quantity"
            fullWidth
            type="number"
            value={currentStock.quantity}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Price"
            name="price"
            fullWidth
            type="number"
            value={currentStock.price}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">
            {editingIndex !== null ? 'Update' : 'Buy'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Stocks;
