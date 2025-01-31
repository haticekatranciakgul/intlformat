// src/features/currencySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postCurrency = createAsyncThunk(
    "currency/postCurrency",
    async (amount) => {
      const formattedAmount = new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: "TRY",
        minimumFractionDigits: 2,
      }).format(amount);
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        amount: formattedAmount,
      });
      return response.data;
    }
  );
  
  const currencySlice = createSlice({
    name: "currency",
    initialState: { value: "" },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(postCurrency.fulfilled, (state, action) => {
        state.value = action.payload.amount;
      });
    },
  });
  
  export default currencySlice.reducer;