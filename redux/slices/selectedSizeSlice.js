import { createSlice } from "@reduxjs/toolkit";

const initialState = { size: null }

export const selectedSizeSlice = createSlice({
    name: 'selectedSize',
    initialState,
    reducers: {
        setSize: (state, action) => {
            state.size = action.payload
        }
    }
})

export const { setSize } = selectedSizeSlice.actions

export const selectSize = state => state.selectedSize.size

export default selectedSizeSlice.reducer