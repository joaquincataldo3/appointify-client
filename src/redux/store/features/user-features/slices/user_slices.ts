import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, UserInitState } from "../interfaces/userFeatures_interfaces";
import axios from "axios";


const user = {
    id: null,
    username: '',
    first_name: '',
    last_name: '',
    email: ''
}

const userInitState: UserInitState = {
    user,
    checkUserCookieStatus: 'idle',
    loginStatus: 'idle',
    error: null
};

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;


export const checkUserCookie = createAsyncThunk("user/checkUserCookie", async (userId: string) => {
    try {
        const response = await axios.get(`${apiUrl}/users/${userId}`);
        console.log(response);
        return response.data;
    } catch (err: any) {
        return err.message;
    }
})

export const login = createAsyncThunk("user/login", async (formData: FormData) => {
    try {
        const response = await axios.post(`${apiUrl}/users/login`, formData);
        return response.data;
    } catch (err: any) {
        return err.message;
    }
    }
)

// create slice toma 3 valores
// name, initial state y reducers
export const userSlice = createSlice({
    name: 'user',
    initialState: userInitState,
    reducers: {
        addUser: (state, action: PayloadAction<{user: User}>) => {
            const {user} = action.payload;
            state.user.id = user.id
            state.user.username = user.username
            state.user.first_name = user.first_name;
            state.user.last_name = user.last_name;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(checkUserCookie.pending, (state, _action) => {
                state.checkUserCookieStatus = 'loading';
            })
            .addCase(checkUserCookie.fulfilled, (state, action) => {
                state.checkUserCookieStatus = 'succeeded';
                state.user = action.payload;
            })
            .addCase(checkUserCookie.rejected, (state, action) => {
                state.checkUserCookieStatus = 'failed';
                state.error = action.payload
            })
            .addCase(login.pending, (state, _action) => {
                state.loginStatus = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loginStatus = 'succeeded';
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loginStatus = 'failed';
                state.error = action.payload
            })
    }
})

export const {addUser} = userSlice.actions;
export default userSlice.reducer;