import { createSlice } from '@reduxjs/toolkit'

const initialState = { isLoading: false }

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        loadingStart: (state) => {
            state.isLoading = true
        },
        loadingStop: (state) => {
            state.isLoading = false
        }
    }
})

export const { loadingStart, loadingStop } = loadingSlice.actions

export const selectIsLoading = state => state.loading.isLoading

export default loadingSlice.reducer