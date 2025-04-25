import React from 'react';
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from '@mui/material';

const dummyData = [
  { industry: 'Technology', company: 'Apple Inc.', symbol: 'AAPL', price: 172.15, change: 1.32, percent: 0.77 },
  { industry: 'Technology', company: 'Microsoft Corp.', symbol: 'MSFT', price: 305.22, change: 2.01, percent: 0.66 },
  { industry: 'Automotive', company: 'Tesla Inc.', symbol: 'TSLA', price: 687.20, change: -12.30, percent: -1.76 },
  { industry: 'Finance', company: 'JPMorgan Chase', symbol: 'JPM', price: 158.45, change: 2.10, percent: 1.34 },
  { industry: 'E-Commerce', company: 'Amazon.com Inc.', symbol: 'AMZN', price: 3420.74, change: 25.12, percent: 0.74 },
  { industry: 'Healthcare', company: 'Pfizer Inc.', symbol: 'PFE', price: 42.10, change: -0.35, percent: -0.82 }
];

const Table = () => {
  return (
    <TableContainer component={Paper} sx={{ mt: 4, maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h6" align="center" sx={{ mt: 2 }}>
        Industry-wise Stock Overview
      </Typography>
      <MuiTable>
        <TableHead>
          <TableRow>
            <TableCell><strong>Industry</strong></TableCell>
            <TableCell><strong>Company</strong></TableCell>
            <TableCell><strong>Symbol</strong></TableCell>
            <TableCell><strong>Price ($)</strong></TableCell>
            <TableCell><strong>Change</strong></TableCell>
            <TableCell><strong>% Change</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyData.map((stock, index) => (
            <TableRow key={index}>
              <TableCell>{stock.industry}</TableCell>
              <TableCell>{stock.company}</TableCell>
              <TableCell>{stock.symbol}</TableCell>
              <TableCell>{stock.price.toFixed(2)}</TableCell>
              <TableCell sx={{ color: stock.change >= 0 ? 'green' : 'red' }}>
                {stock.change >= 0 ? `+${stock.change.toFixed(2)}` : stock.change.toFixed(2)}
              </TableCell>
              <TableCell sx={{ color: stock.percent >= 0 ? 'green' : 'red' }}>
                {stock.percent >= 0 ? `+${stock.percent.toFixed(2)}%` : `${stock.percent.toFixed(2)}%`}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
