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
    isForgotPasswordLoading : false,
    isResetPasswordLoading : false,
    isUpdateProfileDetailsLoading : false,
    isUpdatePhotoProfileLoading : false,
    isLogoutLoading : false,
    username: "",
    email: "",
    phone : "",
    imgProfile : null,
    
}

// @create slice
const authSlice = createSlice({
    name : "auth",
    initialState : INITIAL_STATE,
    reducers : {

    },
    extraReducers : {
        [login.pending] : (state, action) => {
            state.isLoginLoading = true
        },
        [login.fulfilled] : (state, action) => {
            state = Object.assign(state, {
                id : action.payload?.id,
                username : action.payload?.username,
                email : action.payload?.email,
                phone : action.payload?.phone,
                imgProfile : action.payload?.imgProfile,
                isVerified : action.payload?.isVerified,
                isLogin : true,
                isLoginLoading : false,
            })
        },
        [login.rejected] : (state, action) => {
            state = Object.assign(state, {
                isLoginLoading : false,
                isLogin : false,
            })
        },
        [logout.pending] : (state, action) => {
            state.isLogoutLoading = true
        },
        [logout.fulfilled] : (state, action) => {
            state = Object.assign(state, INITIAL_STATE)         
        },
        [logout.rejected] : (state, action) => {
            state.isLogoutLoading = false
        },
        [keepLogin.pending] : (state, action) => {
            state.isKeepLoginLoading = true
        },
        [keepLogin.fulfilled] : (state, action) => {
            state = Object.assign(state, {
                id : action.payload?.id,
                username : action.payload?.username,
                email : action.payload?.email,
                phone : action.payload?.phone,
                password : action.payload?.password,
                imgProfile : action.payload?.imgProfile,
                isVerified : action.payload?.isVerified,
                isLogin : true,
                isKeepLoginLoading : false,
            })
        },
        [keepLogin.rejected] : (state, action) => {
            state = Object.assign(state, {
                isKeepLoginLoading : false,
                isLogin : false,
            })
        },
        [register.pending] : (state, action) => {
            state.isRegisterLoading = true
        },
        [register.fulfilled] : (state, action) => {
            state = Object.assign(state, {
                id : action.payload?.id,
                username : action.payload?.username,
                email : action.payload?.email,
                phone : action.payload?.phone,
                isVerified : false,
                isKeepLoginLoading : false,
                isRegisterLoading : false,
            })
        },
        [register.rejected] : (state, action) => {
            state = Object.assign(state, {
                isRegisterLoading : false,
                isLogin : false,
            })
        },
        [verifyAccount.pending] : (state, action) => {
            state.isRegisterLoading = true
        },
        [verifyAccount.fulfilled] : (state, action) => {
            state = Object.assign(state, {
                isRegisterLoading : false,
                isVerified : true,
                isLogin : false,
            })
        },
        [verifyAccount.rejected] : (state, action) => {
            state = Object.assign(state, {
                isRegisterLoading : false,
                isVerified : false,
                isLogin : false,
            })
        },
        [forgotPassword.pending] : (state, action) => {
            state.isForgotPasswordLoading = true
        },
        [forgotPassword.fulfilled] : (state, action) => {
            state.isForgotPasswordLoading = false
        },
        [forgotPassword.rejected] : (state, action) => {
            state.isForgotPasswordLoading = false
        },
        [resetPassword.pending] : (state, action) => {
            state.isResetPasswordLoading = true
        },
        [resetPassword.fulfilled] : (state, action) => {
            state.isResetPasswordLoading = false
        },
        [resetPassword.rejected] : (state, action) => {
            state.isResetPasswordLoading = false
        },
        [changeUsername.pending] : (state, action) => {
            state.isUpdateProfileDetailsLoading = true
        },
        [changeUsername.fulfilled] : (state, action) => {
            state = Object.assign(state, {
                isUpdateProfileDetailsLoading : false,
                username : action.payload.newUsername,
            })
        },
        [changeUsername.rejected] : (state, action) => {
            state.isUpdateProfileDetailsLoading = false
        },
        [changeEmail.pending] : (state, action) => {
            state.isUpdateProfileDetailsLoading = true
        },
        [changeEmail.fulfilled] : (state, action) => {
            state.isUpdateProfileDetailsLoading = false
        },
        [changeEmail.rejected] : (state, action) => {
            state.isUpdateProfileDetailsLoading = false
        },
        [changePhone.pending] : (state, action) => {
            state.isUpdateProfileDetailsLoading = true
        },
        [changePhone.fulfilled] : (state, action) => {
            state = Object.assign(state, {
                isUpdateProfileDetailsLoading : false,
                phone : action.payload.newPhone,
            })
        },
        [changePhone.rejected] : (state, action) => {
            state.isUpdateProfileDetailsLoading = false
            
        },
        [changePass.pending] : (state, action) => {
            state.isResetPassword = false
        },
        [changePass.fulfilled] : (state, action) => {
            state = Object.assign(state, {
                id : "",
                username : "",
                email : "",
                phone : "",
                password: "",
                imgProfile : "",
                isResetPassword : true,
                isLogin : false
            })
        },
        [changePass.rejected] : (state, action) => {
            state.isResetPassword = false
        },
        [changePhotoProfile.pending] : (state, action) => {
            state = Object.assign(state, {
                isUpdatePhotoProfileLoading : true,
                imgProfile : null
            })
        },
        [changePhotoProfile.fulfilled] : (state, action) => {
            state = Object.assign(state, {
                sisUpdatePhotoProfileLoading : false,
                imgProfile : action.payload.imgProfile
            })
        },
        [changePhotoProfile.rejected] : (state, action) => {
            state.isUpdatePhotoProfileLoading = false
        }

        
    }
})

// export reducer
export default authSlice.reducer