import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/user-features/slices/user_slices";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})
export type RootState = ReturnType<typeof store.getState>;