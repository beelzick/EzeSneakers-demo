import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import reducers from './reducers'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
    timeout: 500
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
    // devTools: false
})