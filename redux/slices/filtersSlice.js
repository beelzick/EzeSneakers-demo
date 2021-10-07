import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    gender: {
        men: false,
        women: false,
    },
    collection: {
        featured: false,
        new: false,
        mostRated: false,
        womenLove: false,
    },
    season: {
        spring: false,
        summer: false,
        autumn: false,
        winter: false,
    },
    brand: {
        nike: false,
        adidas: false,
        reebok: false
    }
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setGenderFilter: (state, action) => {
            state.gender = {
                ...state.gender,
                ...action.payload
            }
        },
        setCollectionFilter: (state, action) => {
            state.collection = {
                ...state.collection,
                ...action.payload
            }
        },
        setSeasonFilter: (state, action) => {
            state.season = {
                ...state.season,
                ...action.payload
            }
        },
        setBrandFilter: (state, action) => {
            state.brand = {
                ...state.brand,
                ...action.payload
            }
        }
    }

})

export const { setGenderFilter, setCollectionFilter, setSeasonFilter, setBrandFilter } = filtersSlice.actions

export const selectAllFilters = state => state.filters
export const selectGenderFilter = state => state.filters.gender

export default filtersSlice.reducer