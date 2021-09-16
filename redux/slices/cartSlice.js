import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'

const cartAdapter = createEntityAdapter({
    selectId: cartItem => cartItem._id
})

const initialState = cartAdapter.getInitialState({
    status: 'idle',
    error: null
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        itemAdd: cartAdapter.addOne,
        itemRemove: cartAdapter.removeOne,
        itemUpdate: cartAdapter.updateOne,
    },
})


export const {
    selectAll: selectCartItems,
    selectById: selectCartItemById,
    selectIds: selectCartItemsIds
} = cartAdapter.getSelectors(state => state.cart)


export const { itemAdd, itemRemove, itemUpdate } = cartSlice.actions

export default cartSlice.reducer