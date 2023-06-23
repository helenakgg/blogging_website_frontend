import { createSlice } from "@reduxjs/toolkit";

// @import async thunk
import { 
    getCategories,
    getLatestArticles,
    getArticle,
    getMostFavorite,
    getLikedArticles,
    likeArticle,
    createArticle,
    deleteArticle
} from "./slices"

const INITIAL_STATE = {
    categories :[],
    isLoading : false



}

const blogsSlice = createSlice({
    name : "blogs",
    initialState : INITIAL_STATE,
    extraReducers : {
        
        [getCategories.pending] : (state, action) => {
            state.isLoading = true
        },
        [getCategories.fulfilled] : (state, action) => {
            state = Object.assign(state, {
                isLoading : false,
                categories : action.payload
            })
        },
        [getCategories.rejected] : (state, action) => {
            state.isLoading = false
        }
    
    
    
    
    
    
    
    
    
    }
})