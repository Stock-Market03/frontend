import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useAddStockMutation } from '../features/stocks/stockApiSlice';// your RTK Query endpoint

export default function AdminPage() {
  const [formData, setFormData] = useState({
    symbol: "",
    name: "",
    openingPrice: "",
    volume: "",
    marketCap: "",
    sector: "",
    industry: "",
  });

  const [addStock] = useAddStockMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const preparedData = {
      ...formData,
      openingPrice: Number(formData.openingPrice),
      volume: Number(formData.volume),
      marketCap: Number(formData.marketCap),
    };
  
    try {
      await addStock(preparedData).unwrap();
      setFormData({
        symbol: "",
        name: "",
        openingPrice: "",
        volume: "",
        marketCap: "",
        sector: "",
        industry: "",
      });
      alert("Stock added successfully!");
    } catch (error) {
      console.error("Error adding stock:", error);
    }
  };
  

  return (
    <Box
      p={2}
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="center"
      alignItems="flex-start"
      minHeight="100vh"
      gap={4}
    >
      {/* Add New Stock Form */}
      <Box flex={1}>
        <Typography variant="h4" gutterBottom>
          Add New Stock
        </Typography>
        <Paper elevation={3} sx={{ p: 2 }}>
          <form onSubmit={handleSubmit}>
            {["symbol", "name", "openingPrice", "volume", "marketCap", "sector", "industry"].map((field) => (
              <TextField
                key={field}
                fullWidth
                margin="normal"
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                name={field}
                value={formData[field]}
                onChange={handleChange}
              />
            ))}
            <Box mt={2} display="flex" justifyContent="space-between">
              <Button
                variant="outlined"
                onClick={() =>
                  setFormData({
                    symbol: "",
                    name: "",
                    openingPrice: "",
                    volume: "",
                    marketCap: "",
                    sector: "",
                    industry: "",
                  })
                }
              >
                Cancel
              </Button>
              <Button type="submit" variant="contained">
                Add Stock
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>

      {/* Profit / Loss Panel */}
      <Box flex={1}>
        <Typography variant="h4" gutterBottom>
          Profit / Loss
        </Typography>
        <Paper elevation={3} sx={{ p: 2 }}>
          {["AAPL", "GOOG", "TSLA", "MSFT", "AMZN"].map((stock, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="space-between"
              mb={1}
              borderBottom="1px solid #ddd"
              pb={1}
            >
              <Typography>{stock}</Typography>
              <Typography color={index % 2 === 0 ? "green" : "red"}>
                {index % 2 === 0 ? "+$120.50" : "-$75.80"}
              </Typography>
            </Box>
          ))}
        </Paper>
      </Box>
    </Box>
  );
}
