import { createSlice } from '@reduxjs/toolkit';

//hidden panel position left/mid/right

const initialState = {
    mainClass: 'mid',
    womenClass: 'left',
    menClass: 'left',
    newClass: 'left',
    seasonClass: 'left'
}

const drawerClassSlice = createSlice({
    name: 'drawerClass',
    initialState,
    reducers: {
        setMainClass: (state, action) => {
            state.mainClass = action.payload
        },
        setWomenClass: (state, action) => {
            state.womenClass = action.payload
        },
        setMenClass: (state, action) => {
            state.menClass = action.payload
        },
        setNewClass: (state, action) => {
            state.newClass = action.payload
        },
        setSeasonClass: (state, action) => {
            state.seasonClass = action.payload
        },
    }
})

export const {
    setMainClass,
    setMenClass,
    setNewClass,
    setSeasonClass,
    setWomenClass
} = drawerClassSlice.actions

export const selectWomenClass = state => state.drawerClass.womenClass
export const selectSeasonClass = state => state.drawerClass.seasonClass
export const selectMenClass = state => state.drawerClass.menClass
export const selectNewClass = state => state.drawerClass.newClass
export const selectMainClass = state => state.drawerClass.mainClass

export default drawerClassSlice.reducer