import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    open: false
}

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        setDrawerState: (state, action) => {
            state.open = action.payload
        }
    }
})

export const selectDrawerOpen = state => state.drawer.open

export const { setDrawerState } = drawerSlice.actions

export default drawerSlice.reducer