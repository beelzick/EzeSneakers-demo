import { combineReducers } from 'redux'
import loadingReducer from './slices/loadingSlice'
import loginDialogReducer from './slices/loginDialogSlice'
import registerErrorReducer from './slices/registerErrorSlice'
import favoritesSlice from './slices/favoritesSlice'
import cartSlice from './slices/cartSlice'
import selectedSizeSlice from './slices/selectedSizeSlice'
import sizeErrorSlice from './slices/sizeErrorSlice'

const reducers = combineReducers({
    loading: loadingReducer,
    loginDialog: loginDialogReducer,
    registerError: registerErrorReducer,
    favorites: favoritesSlice,
    selectedSize: selectedSizeSlice,
    cart: cartSlice,
    sizeError: sizeErrorSlice,
})

export default reducers