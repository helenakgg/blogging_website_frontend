import Toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../utils/api.instance"

// @create async thunk
export const login = createAsyncThunk(
    "auth/login",
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await api.post("auth/login", payload)

            // @if data invalid
            if (!data) {
                return rejectWithValue({ message : "username or password does't exist." })
            }

            // @save token to local storage
            localStorage.setItem("token", data?.token)
            localStorage.setItem("id", data?.isAccountExist?.id)
            Toast.success("login success")

            return data?.isAccountExist
        } catch (error) {
            console.error(error)
            Toast.error(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

export const keepLogin = createAsyncThunk(
    "auth/keepLogin",
    async (payload, { rejectWithValue }) => {
        try {
            const {data} = await api.get("/auth")
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const register = createAsyncThunk(
    "auth/register",
    async (payload, { rejectWithValue }) => {
        try {
            const {data} = await api.post("/auth", payload)
            localStorage.setItem("token", data?.token)
            localStorage.setItem("id", data?.isAccountExist?.id)
            Toast.success(data?.message)
            return data?.data
        } catch (error) {
            console.error(error)
            Toast.error(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async (payload, { rejectWithValue }) => {
        try {
            // @delete token & id from local storage
            localStorage.removeItem("token")
            localStorage.removeItem("id")

        } catch (error) {
            console.error(error)
            Toast.error(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

//
export const verifyAccount = createAsyncThunk(
    "auth/verification",
    async (payload, { rejectWithValue }) => {
        try {
            const {data} = await api.patch("/auth/verify",{},)
            Toast.success(data.message)
        } catch (error) {
            console.error(error)
            Toast.error(error.reponse.data)
            return rejectWithValue(error.response.data)
        }
    }
)

export const forgotPassword = createAsyncThunk(
    "auth/forgot",
    async (payload, { rejectWithValue }) => {
        try {
            const {data} = await api.put("/auth/forgotPass", payload)
            Toast.success(data.message) 
        } catch (error) {
            console.error(error)
            Toast.error("failed to verify your account")
            return rejectWithValue(error.response.data)
        }
    }
)

export const resetPassword = createAsyncThunk(
    "auth/resetPassword",
    async (payload, { rejectWithValue }) => {
        try {
            const {data} = await api.patch("/auth/resetPass",payload)
            Toast.success(data.message) 
            return <Navigate to="/login" replace/>
        } catch (error) {
            console.error(error)
            Toast.error(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

// change profile data
export const changeUsername = createAsyncThunk(
    "auth/changeUsername",
    async (payload, { rejectWithValue }) => {
        try {
            await api.patch("/auth/changeUsername",payload)
            Toast.success("username has been updated!") 
            return payload
        } catch (error) {
            console.error(error)
            Toast.error(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

export const changeEmail = createAsyncThunk(
    "auth/changeEmail",
    async (payload, { rejectWithValue }) => {
        try {            
            const {data} = await api.patch("auth/changeEmail",payload)
            localStorage.removeItem("token")
            localStorage.removeItem("id")
            Toast.success("email has been updated!") 
            localStorage.setItem("token",data.token)
            return data
        } catch (error) {
            console.error(error)
            Toast.error(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

export const changePhone = createAsyncThunk(
    "auth/changePhone",
    async (payload, { rejectWithValue }) => {
        try {            
            await api.patch("auth/changePhone",payload)
            Toast.success("phone number has been updated!") 
            return payload
        } catch (error) {
            console.error(error)
            Toast.error(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

export const changePass = createAsyncThunk(
    "auth/changePass",
    async (payload, { rejectWithValue }) => {
        try {            
            const {data} = await api.patch("auth/changePass",payload)
            Toast.success("password has been updated!") 
            localStorage.removeItem("token")
            localStorage.removeItem("id")
            return data
        } catch (error) {
            console.error(error)
            Toast.error(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

export const changePhotoProfile = createAsyncThunk(
    "auth/changePhotoProfile",
    async (payload, { rejectWithValue }) => {
      try {
            const { data } = await api.post("/profile/single-uploaded", payload);
            return data?.imgProfile;
      } catch (error) {
            console.error(error)
            Toast.error(error.response.data)
            return rejectWithValue(error.response.data)
      }
    }
)