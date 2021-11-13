import { createSlice } from '@reduxjs/toolkit'

const initialState = { error: null }

export const sizeErrorSlice = createSlice({
    name: 'sizeError',
    initialState,
    reducers: {
        setSizeError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const { setSizeError } = sizeErrorSlice.actions

export const selectSizeError = state => state.sizeError.error

export default sizeErrorSlice.reducer