

type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface User {
    id: number | null
    username: string
    first_name: string
    last_name: string
    email: string
}

export interface UserInitState {
    user: User
    checkUserCookieStatus: RequestStatus
    loginStatus: RequestStatus
    checkUserCookieError: any
    loginError: any
    isMobileNavbarOpen: boolean
}

export interface UserLoginData {
    email: string
    password: string
}

export interface UserInputEmpty {
    emailEmpty: boolean
    passwordEmpty: boolean
}