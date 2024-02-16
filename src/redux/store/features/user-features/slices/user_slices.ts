import { PayloadAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
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
    loginError: null,
    isMobileNavbarOpen: false
};

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

export const checkUserCookie = createAsyncThunk("user/checkUserCookie", async () => {
    try {
        const response = await axios.get(`${apiUrl}/auth/check-cookie`, {
            headers:  {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
        console.log(response);
        return response.data;
    } catch (err: any) {
        return err.message;
    }
})

export const login = createAsyncThunk("auth/sign-in", async (formData: FormData) => {
    try {
        const response = await axios.post(`${apiUrl}/auth/sign-in`, formData, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
       
        return response.data;
    } catch (err: any) {
        const errorMsg = err.response.data.message;
        throw new Error(errorMsg);
    }
    }
)

// create slice toma 3 valores
// name, initial state y reducers
export const userSlice = createSlice({
    name: 'user',
    initialState: userInitState,
    reducers: { 
        toggleMobileNavbar(state){
            console.log('llego')
            state.isMobileNavbarOpen = !state.isMobileNavbarOpen
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
                state.loginError = null
                state.loginStatus = 'succeeded';
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loginStatus = 'failed';
                state.loginError = action.error.message;
            })
    }
})


export const getLoginStatus = (state: RootState) => state.user.loginStatus;
export const getLoginError = (state: RootState) => state.user.loginError;
export const getUser = (state: RootState) => state.user.user;
export const getMobileNavbarOpenStatus = (state: RootState) => state.user.isMobileNavbarOpen;
export const {toggleMobileNavbar} = userSlice.actions;
 export default userSlice.reducer;