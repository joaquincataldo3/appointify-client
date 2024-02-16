import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, UserInitState } from "../interfaces/userFeatures_interfaces";
import { RootState } from "../../../store/store";
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
    checkUserCookieError: null,
    loginError: null
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

export const login = createAsyncThunk("auth/sign-in", async (formData: FormData) => {
    try {
        console.log(formData.get('email'))
        const response = await axios.post(`${apiUrl}/auth/sign-in`, formData, {
            headers: {
                'Content-Type': 'application/json'
              }
        });
        console.log(response);
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
                state.checkUserCookieError = action.payload
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
                state.loginError = action.payload
            })
    }
})


export const getLoginStatus = (state: RootState) => state.user.loginStatus;
export const getLoginError = (state: RootState) => state.user.loginError;
export default userSlice.reducer;