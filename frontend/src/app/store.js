// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import stockReducer from '../features/stocks/stockSlice';
import { stockApi } from '../features/stocks/stockApiSlice'; // import stockApi

export const store = configureStore({
  reducer: {
    stocks: stockReducer,
    [stockApi.reducerPath]: stockApi.reducer, // add api slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stockApi.middleware), // add api middleware
});
