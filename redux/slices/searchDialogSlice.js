import { createSlice } from '@reduxjs/toolkit'

const initialState = { open: false }

export const searchDialogSlice = createSlice({
    name: 'searchDialog',
    initialState,
    reducers: {
        setSearchOpen: (state, action) => {
            state.open = action.payload
        }
    }
})

export const { setSearchOpen } = searchDialogSlice.actions

export const selectSearchOpen = state => state.searchDialog.open

export default searchDialogSlice.reducer