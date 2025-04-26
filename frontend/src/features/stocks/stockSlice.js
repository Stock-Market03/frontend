import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = "http://localhost:5000/api/stocks";

// Thunks

export const fetchStocks = createAsyncThunk(
  'stocks/fetchStocks',
  async ({ page = 1, limit = 20, search = '', sort = 'symbol' }, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}?page=${page}&limit=${limit}&search=${search}&sort=${sort}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchStockById = createAsyncThunk(
  'stocks/fetchStockById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createNewStock = createAsyncThunk(
  'stocks/createNewStock',
  async (stockData, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL, stockData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateStock = createAsyncThunk(
  'stocks/updateStock',
  async ({ id, updatedData }, thunkAPI) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, updatedData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteStock = createAsyncThunk(
  'stocks/deleteStock',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchStockHistory = createAsyncThunk(
  'stocks/fetchStockHistory',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}/history`);
      return { id, history: response.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Slice

const stockSlice = createSlice({
  name: 'stocks',
  initialState: {
    stocks: [],
    totalPages: 1,
    currentPage: 1,
    loading: false,
    error: null,
    selectedStock: null,
    stockHistories: {}
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStocks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStocks.fulfilled, (state, action) => {
        state.loading = false;
        state.stocks = action.payload.stocks;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchStocks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(fetchStockById.fulfilled, (state, action) => {
        state.selectedStock = action.payload;
      })
      .addCase(createNewStock.fulfilled, (state, action) => {
        state.stocks.push(action.payload);
      })
      .addCase(updateStock.fulfilled, (state, action) => {
        const index = state.stocks.findIndex(stock => stock._id === action.payload._id);
        if (index !== -1) {
          state.stocks[index] = action.payload;
        }
      })
      .addCase(deleteStock.fulfilled, (state, action) => {
        state.stocks = state.stocks.filter(stock => stock._id !== action.payload);
      })
      .addCase(fetchStockHistory.fulfilled, (state, action) => {
        state.stockHistories[action.payload.id] = action.payload.history;
      });
  },
});

export default stockSlice.reducer;
