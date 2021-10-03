import { createSlice } from '@reduxjs/toolkit'

const initialState = { open: false }

export const demoDialogSlice = createSlice({
    name: 'demoDialog',
    initialState,
    reducers: {
        demoDialogOpen: (state) => {
            state.open = true
        },
        demoDialogClose: (state) => {
            state.open = false
        }
    }
})

export const { demoDialogClose, demoDialogOpen } = demoDialogSlice.actions

export const selectDemoDialogOpen = state => state.demoDialog.open

export default demoDialogSlice.reducer