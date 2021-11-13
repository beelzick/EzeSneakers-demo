import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    menuMen: false,
    menuWomen: false,
    menuNew: false,
    menuSeason: false,
}

export const selectionMenusSlice = createSlice({
    name: 'selectionMenus',
    initialState,
    reducers: {
        setMenuMen: (state, action) => {
            state.menuMen = action.payload
        },
        setMenuWomen: (state, action) => {
            state.menuWomen = action.payload
        },
        setMenuNew: (state, action) => {
            state.menuNew = action.payload
        },
        setMenuSeason: (state, action) => {
            state.menuSeason = action.payload
        }
    }
})

export const { setMenuMen, setMenuWomen, setMenuNew, setMenuSeason } = selectionMenusSlice.actions

export const selectMenuMen = state => state.selectionMenus.menuMen
export const selectMenuWomen = state => state.selectionMenus.menuWomen
export const selectMenuNew = state => state.selectionMenus.menuNew
export const selectMenuSeason = state => state.selectionMenus.menuSeason

export default selectionMenusSlice.reducer