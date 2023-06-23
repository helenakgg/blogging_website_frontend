import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api.instance";
import Toast from "react-hot-toast";

export const getCategories = createAsyncThunk(
    "blogs/getCategories",
    async (payload, {rejectWithValue}) => {
        try {
            const { data } = await api.get("/blog/allCategory")
            return data
        } catch (error) {
            console.error(error)
            Toast.error(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

export const getLatestArticles = createAsyncThunk(
    "blogs/getLatestArticles",
    async (payload, {rejectWithValue}) => {
        try {
            const { data } = await api.get("/blog")
            const latestArticles = data.result.slice(0, 5)
            return latestArticles 
        } catch (error) {
            console.error(error)
            Toast.error(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

export const getArticle = createAsyncThunk(
    "blogs/getArticle",
    async (payload, {rejectWithValue}) => {
        try {
            const { data } = await api.get(`/blog${payload}`)
            return data 
        } catch (error) {
            console.error(error)
            Toast.error(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

export const getMostFavorite = createAsyncThunk(
    "blogs/getMostFavorite",
    async (payload, {rejectWithValue}) => {
        try {
            const { data } = await api.get("/blog/pagFav")
            return data.result.sort((a, b) => b.total_fav - a.total_fav)
        } catch (error) {
            console.error(error)
            Toast.error(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

export const getLikedArticles = createAsyncThunk(
    "blogs/getLikedArticles",
    async (payload, {rejectWithValue}) => {
        try {
            const { data } = await api.get("/blog/pagLike")
            return data.result
        } catch (error) {
            console.error(error)
            Toast.error(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

//USER CAN

export const likeArticle = createAsyncThunk(
    "blogs/likeArticle",
    async (payload, { rejectWithValue }) => {
        try {
            await api.post("/blog/like", payload)
            Toast("Thank You for liking this Article!")
        } catch (error) {
            console.error(error)
            Toast.error(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

export const createArticle = createAsyncThunk(
    "blogs/createArticle",
    async (payload, { rejectWithValue }) => {
        try {            
            const { data } = await api.post("/blog", payload)
            Toast.success("Congratulations! You have created an Article!") 
            return data
        } catch (error) {
            console.error(error)
            Toast.error(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

export const deleteArticle = createAsyncThunk(
    "blogs/deleteArticle",
    async (payload, { rejectWithValue }) => {
        try {            
            await api.patch(`/blog/remove/$(payload)`)
            Toast.success("The Article has been deleted.") 
        } catch (error) {
            console.error(error)
            Toast.error(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)
