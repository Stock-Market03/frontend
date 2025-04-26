// src/features/stocks/stockApiSlice.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BASE_URL from '../../baseurl';


export const stockApi = createApi({
  reducerPath: 'stockApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/stocks` }), // final url: http://localhost:5000/api/stocks
  tagTypes: ['Stocks'],
  endpoints: (builder) => ({
    addStock: builder.mutation({
      query: (newStock) => ({
        url: '/',
        method: 'POST',
        body: newStock,
      }),
      invalidatesTags: ['Stocks'],
    }),
    fetchStocks: builder.query({
      query: () => '/',
      providesTags: ['Stocks'],
    }),
    // you can add more endpoints: fetchStockById, updateStock, deleteStock, etc.
  }),
});

// Export hooks
export const { useAddStockMutation, useFetchStocksQuery } = stockApi;
