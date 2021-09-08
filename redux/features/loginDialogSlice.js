import { createSlice } from '@reduxjs/toolkit'

const initialState = { open: false }

export const loginDialogSlice = createSlice({
    name: 'loginDialog',
    initialState,
    reducers: {
        dialogOpen: (state) => {
            state.open = true
        },
        dialogClose: (state) => {
            state.open = false
        }
    }
})

export const { dialogOpen, dialogClose } = loginDialogSlice.actions

export const selectOpen = state => state.loginDialog.open

export default loginDialogSlice.reducer