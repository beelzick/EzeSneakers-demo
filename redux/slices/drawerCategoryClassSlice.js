import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    women: {
        brand: 'right',
        collection: 'right',
        season: 'right',
        for: 'right'
    },
    men: {
        brand: 'right',
        collection: 'right',
        season: 'right',
        for: 'right'
    },
    new: {
        brand: 'right',
        season: 'right',
        gender: 'right'
    },
    season: {
        women: 'right',
        men: 'right'
    }
}

const drawerCategoryClassSlice = createSlice({
    name: 'drawerCategoryClass',
    initialState,
    reducers: {
        setWomenCategoryClass: (state, action) => {
            state.women = {
                ...state.women,
                ...action.payload
            }
        },
        setMenCategoryClass: (state, action) => {
            state.men = {
                ...state.men,
                ...action.payload
            }
        },
        setNewCategoryClass: (state, action) => {
            state.new = {
                ...state.new,
                ...action.payload
            }
        },
        setSeasonCategoryClass: (state, action) => {
            state.season = {
                ...state.season,
                ...action.payload
            }
        },
        setAllClasses: (state) => {
            state = initialState
        }
    }
})

export const {
    setMenCategoryClass,
    setNewCategoryClass,
    setSeasonCategoryClass,
    setWomenCategoryClass,
    setAllClasses
} = drawerCategoryClassSlice.actions

export const selectMenCategoryClass = state => state.drawerCategoryClass.men
export const selectWomenCategoryClass = state => state.drawerCategoryClass.women
export const selectNewCategoryClass = state => state.drawerCategoryClass.new
export const selectSeasonCategoryClass = state => state.drawerCategoryClass.season

export default drawerCategoryClassSlice.reducer