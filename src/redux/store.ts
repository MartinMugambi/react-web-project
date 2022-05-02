import {configureStore} from "@reduxjs/toolkit";
import postSlice from "./post/postSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
    reducer: {
      user: userSlice,
      post: postSlice
    }
})

export type RootState = ReturnType<typeof  store.getState>

export type AppDispatch = typeof  store.dispatch;