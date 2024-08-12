import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const logIn = createAsyncThunk("login", async ({ email, password }) => {
  const response = await axios.post(`/api/login`, {
    email: email,
    password: password,
  });
  return response.data;
});

export const signUp = createAsyncThunk("signUp", async ({ name, email, password }) => {
  const response = await axios.post("api/signUp", {
    name: name,
    email: email,
    password: password,
    city: "Ahmedabad",
    state: "Gujarat",
  });
  return response.data;
})

const userSlice = createSlice(
  {
    name: "user",
    initialState: {
      isLoading: false,
      isError: false,
      message: "",
      user: null
    },
    reducers: {
      logOut: (state) => {
        state.user = null;
        localStorage.removeItem("user");
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(logIn.rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
          state.message = "Invalid credentials";
        })
        .addCase(logIn.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(logIn.fulfilled, (state, action) => {
          state.user = action.payload.data;
          state.isError = false;
          state.message = "Login successful";
          localStorage.setItem("user", JSON.stringify(state.user))
          state.isLoading = false;
        })
        .addCase(signUp.rejected, (state) => {
          state.isLoading = false;
          state.message = "User exists";
          state.isError = true;
        })
        .addCase(signUp.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(signUp.fulfilled, (state, action) => {
          state.isLoading = false;
          state.message = "Signup successful";
          state.isError = false;
          state.user = action.payload.data;
          localStorage.setItem("user", JSON.stringify(state.user))
        })
    }
  }
)

export const { logOut } = userSlice.actions

export default userSlice.reducer