import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import chatSlice from "./slice/chatSlice";

const stores = configureStore({
  reducer: {
    user: userSlice,
    chat: chatSlice
  }
});

export default stores;