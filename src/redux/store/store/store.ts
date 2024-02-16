import { AnyAction, Store, ThunkDispatch, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/user-features/slices/user_slices";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

// 3. Create a type for store using RootState and Thunk enabled dispatch
export type AppStore = Omit<Store<RootState, AnyAction>, "dispatch"> & {
    dispatch: AppThunkDispatch;
};