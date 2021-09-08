import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from './features/loadingSlice'
import loginDialogReducer from './features/loginDialogSlice'

export const store = configureStore({
    reducer: {
        loading: loadingReducer,
        loginDialog: loginDialogReducer
    }
})