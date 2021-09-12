import { createSlice } from '@reduxjs/toolkit'

const initialState = { message: '' }

export const registerErrorSlice = createSlice({
    name: 'registerError',
    initialState,
    reducers: {
        pushErrorMessage: (state, action) => {
            state.message = action.payload
        },
        cleanErrorMessage: (state) => {
            state.message = ''
        }
    }
})

export const { pushErrorMessage, cleanErrorMessage } = registerErrorSlice.actions

export const selectErrorMessage = state => state.registerError.message

export default registerErrorSlice.reducer