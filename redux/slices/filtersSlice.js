import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
        reebok: false,
    }
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
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

export const { setCollectionFilter, setSeasonFilter, setBrandFilter } = filtersSlice.actions

export const selectFilters = state => state.filters

export default filtersSlice.reducer