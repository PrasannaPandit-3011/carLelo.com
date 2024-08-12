import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const carUser = createAsyncThunk("carUser", async ({ id }) => {
  const response = await axios.get(`/api/userCar/${id}`);
  return response.data.data;
});

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    carDetails: null,
    messages: [],
    user: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(carUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.carDetails = action.payload.car
        state.loading = false;
        console.log("suceess")
      })
      .addCase(carUser.rejected, (state) => {
        state.user = null;
        state.carDetails = null;
        state.loading = false;
        console.log("rejected")
      })
      .addCase(carUser.pending, (state) => {
        console.log("pending")
        state.loading = true;
      })
  }
})

export default chatSlice.reducer;