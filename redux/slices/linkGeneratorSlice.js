import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    collectionFilters: [],
    seasonFilters: [],
    brandFilters: [],
}

const linkGeneratorSlice = createSlice({
    name: 'linkGenerator',
    initialState,
    reducers: {
        addCollectionFilter: (state, action) => {
            state.collectionFilters.push(action.payload)
        },
        removeCollectionFilter: (state, action) => {
            state.collectionFilters = state.collectionFilters.filter(filter => filter !== action.payload)
        }
    }
})

export const { addCollectionFilter, removeCollectionFilter } = linkGeneratorSlice.actions

export default linkGeneratorSlice.reducer