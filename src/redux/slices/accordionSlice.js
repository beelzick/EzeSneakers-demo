import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    gender: true,
    collection: true,
    season: true,
    brand: true,
}

export const accordionSlice = createSlice({
    name: 'accordion',
    initialState,
    reducers: {
        setGenderAccordionExpanded: (state, action) => {
            state.gender = action.payload
        },
        setCollectionAccordionExpanded: (state, action) => {
            state.collection = action.payload
        },
        setSeasonAccordionExpanded: (state, action) => {
            state.season = action.payload
        },
        setBrandAccordionExpanded: (state, action) => {
            state.brand = action.payload
        }
    }

})

export const {
    setBrandAccordionExpanded,
    setCollectionAccordionExpanded,
    setGenderAccordionExpanded,
    setSeasonAccordionExpanded
} = accordionSlice.actions

export const selectGenderExpanded = state => state.accordion.gender
export const selectCollectionExpanded = state => state.accordion.collection
export const selectSeasonExpanded = state => state.accordion.season
export const selectBrandExpanded = state => state.accordion.brand

export default accordionSlice.reducer