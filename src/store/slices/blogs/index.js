import { createSlice } from "@reduxjs/toolkit";

// @import async thunk
import { 
    getCategories,
    getLatestArticles,
    getArticles,
    getMostFavorite,
    getLikedArticles,
    likeArticle,
    createArticle,
    deleteArticle
} from "./slices"

const INITIAL_STATE = {
    categories :[],
    latestArticles: [],
    articles : [],
    allArticles:[],
    filteredArticles:[],
    totalPage : 1,
    currentPage : 1,
    favorites : [],
    filtered :[],
    mostFavArtPerCategory : [],
    likedArticles :[],
    isLoading : false,
    isChangePage :false,
    isUploaded :false,
    isDeleted : false
    
}

const blogsSlice = createSlice({
    name : "blogs",
    initialState : INITIAL_STATE,
    extraReducers : {
        
    //getCategories
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
        },
    
    //getLatestArticles
        [getLatestArticles.pending] : (state, action) => {
            state.isLoading = true
        },
        [getLatestArticles.fulfilled] : (state, action) => {
            state = Object.assign(state, {
                isLoading : false,
                latestArticles : action.payload
            })
        },
        [getLatestArticles.rejected] : (state, action) => {
            state.isLoading = false
        },
    
    //getArticles
        [getArticles.pending] : (state, action) => {
            state.isLoading = true
        },
        [getArticles.fulfilled] : (state, action) => {
            state = Object.assign(state, {
                isLoading : false,
                articles : action.payload?.data.result,
                totalPage : action.payload?.data.page,
                currentPage : action.payload?.data.blogPage,
                allArticles : action.payload?.response,
                filteredArticles : action.payload?.outputFilter
            })
        },
        [getArticles.rejected] : (state, action) => {
            state.isLoading = false
        },
    
    //getMostFavorite
        [getMostFavorite.pending] : (state, action) => {
            state.isLoading = true
        },
        [getMostFavorite.fulfilled] : (state, action) => {
            state = Object.assign(state, {
                isLoading : false,
                favorites : action.payload?.responseFavBlogs,
                filtered : action.payload?.responseFiltered?.result,
                mostFavArtPerCategory : action.payload?.outputFilterFavBlogs
            })
        },
        [getMostFavorite.rejected] : (state, action) => {
            state.isLoading = false
        },
    
    //getLikedArticles
        [getLikedArticles.pending] : (state, action) => {
            state.isLoading = true
        },
        [getLikedArticles.fulfilled] : (state, action) => {
            state = Object.assign(state, {
                isLoading : false,
                likedArticles : action.payload?.result,
                currentPage : action.payload?.blogPage,
            })
        },
        [getLikedArticles.rejected] : (state, action) => {
            state.isLoading = false
        },
    
    //likeArticle
        [likeArticle.pending] : (state, action) => {
            state.isLoading = true
        },
        [likeArticle.fulfilled] : (state, action) => {
            state.isLoading = false
        },
        [likeArticle.rejected] : (state, action) => {
            state.isLoading = false
        },

    //createArticle
        [createArticle.pending] : (state, action) => {
            state.isLoading = true
        },
        [createArticle.fulfilled] : (state, action) => {
            state = Object.assign(state, {
                isLoading : false,
                isUploaded : true
            })
        },
        [createArticle.rejected] : (state, action) => {
            state.isLoading = false
        },

    //deleteArticle
        [deleteArticle.pending] : (state, action) => {
            state.isDeleted = true
        },
        [deleteArticle.fulfilled] : (state, action) => {
            state.isDeleted = true
        },
        [deleteArticle.rejected] : (state, action) => {
            state.isDeleted = false
        }

    }
})

export default blogsSlice.reducer