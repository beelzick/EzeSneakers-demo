import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'

const favoritesAdapter = createEntityAdapter({
    selectId: favorite => favorite._id
})

const initialState = favoritesAdapter.getInitialState({
    status: 'idle',
    error: null
})

export const fetchFavorites = createAsyncThunk('favorites/fetchFavorites', async () => {
    const response = await axios.get('/api/user/favorites')
    return response.data.data[0].favorites
})

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchFavorites.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchFavorites.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            favoritesAdapter.setAll(state, action.payload)
        },
        [fetchFavorites.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        }
    }
})

export const {
    selectAll: selectFavorites,
    selectById: selectFavoriteById,
    selectIds: selectFavoritesIds
} = favoritesAdapter.getSelectors(state => state.favorites)

export default favoritesSlice.reducer

