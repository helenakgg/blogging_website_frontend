import { createSlice } from "@reduxjs/toolkit";

// @import async thunk
import { 
    login, 
    keepLogin, 
    register, 
    logout, 
    verifyAccount, 
    forgotPassword, 
    resetPassword, 
    changeUsername, 
    changeEmail, 
    changePhone, 
    changePass, 
    changePhotoProfile
} from "./slices";

// @initial state
const INITIAL_STATE = {
    isLogin : false,
    isVerified : false,
    isLoginLoading : false,
    isKeepLoginLoading : false,
    isRegisterLoading : false,
    isForgotLoading : false,
    isResetPasswordLoading : false,
    isUpdateProfileDetails : false,
    isUpdateProfilePicLoading : false,
    isLogoutLoading : false,
    id: null,
    username: "",
    email: "",
    phone : "",
    imgProfile : null,
    role : null
}

// @create slice
const authSlice = createSlice({
    name : "auth",
    initialState : INITIAL_STATE,
    reducers : {

    },
    extraReducers : {
        [login.pending] : (state, action) => {
            state.loading = true
        },
        [login.fulfilled] : (state, action) => {
            state.loading = false
            state.id = action.payload?.id
            state.username = action.payload?.username
            state.password = action.payload?.password
            state.email = action.payload?.email
            state.role = action.payload?.role
            state.token = action.payload?.token            
        },
        [login.rejected] : (state, action) => {
            state.loading = false
        },
        [keepLogin.pending] : (state, action) => {
            state.isKeepLoginLoading = true
        },
        [keepLogin.fulfilled] : (state, action) => {
            state.isKeepLoginLoading = false
            state.id = action.payload?.id
            state.username = action.payload?.username
            state.password = action.payload?.password
            state.email = action.payload?.email
            state.role = action.payload?.role
            state.token = action.payload?.token            
        },
        [keepLogin.rejected] : (state, action) => {
            state.isKeepLoginLoading = false
        },
        [register.pending] : (state, action) => {
            state.loading = true
        },
        [register.fulfilled] : (state, action) => {
            state.loading = false
            state.id = action.payload?.id
            state.username = action.payload?.username
            state.password = action.payload?.password
            state.email = action.payload?.email
            state.role = action.payload?.role
            state.token = action.payload?.token            
        },
        [register.rejected] : (state, action) => {
            state.loading = false
        },
        [logout.pending] : (state, action) => {
            state.loading = true
        },
        [logout.fulfilled] : (state, action) => {
            state.loading = false
            state.id = null
            state.username = null
            state.password = null
            state.email = null
            state.role = null
            state.token = null            
        },
        [logout.rejected] : (state, action) => {
            state.loading = false
        }
    }
})

// export reducer
export default authSlice.reducer
