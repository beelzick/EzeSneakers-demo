import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sneakersPage: {
        men: true,
        women: true,
    }
}

export const genderFiltersSlice = createSlice({
    name: 'genderFilters',
    initialState,
    reducers: {
        bothTrue: (state) => {
            state.sneakersPage.men = true
            state.sneakersPage.women = true
        },
        bothFalse: (state) => {
            state.sneakersPage.men = false
            state.sneakersPage.women = false
        }
    }

})

export const { bothFalse, bothTrue } = genderFiltersSlice.actions

export const selectSneakersPageFilters = state => state.genderFilters.sneakersPage

export default genderFiltersSlice.reducer