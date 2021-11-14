import Button from '@mui/material/Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ObjectID from 'bson-objectid'
import { useSnackbar } from 'notistack';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { itemAdd, itemUpdate, selectCartItemById } from '../../redux/slices/cartSlice'
import { selectSize, setSize } from '../../redux/slices/selectedSizeSlice'
import { sizeExists, UpdateData } from '../../helpers/showPageHelpers'
import { setSizeError } from '../../redux/slices/sizeErrorSlice'

export default function AddToCartButton({ name, price, imgUrl, gender, tags, sizes, _id }) {
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar()
    const selectedSize = useSelector(selectSize)
    const cartItem = useSelector(state => selectCartItemById(state, _id))

    useEffect(() => {
        dispatch(setSize(null))
    }, [dispatch])

    const item = {
        _id,
        name,
        price,
        tags,
        gender,
        imgUrl,
        sizes,
        selectedSizes: [
            {
                id: ObjectID().toHexString(),
                size: selectedSize,
                qty: 1,
            }
        ]
    }

    const handleAddCart = () => {
        if (!selectedSize) {
            return dispatch(setSizeError(true))
        }

        if (cartItem && sizeExists(selectedSize, cartItem.selectedSizes)) {
            dispatch(itemUpdate(new UpdateData(_id, cartItem.selectedSizes, selectedSize).sizeExists()))
            enqueueSnackbar('Added to cart', {
                variant: 'success'
            })
        } else if (cartItem && !sizeExists(selectedSize, cartItem.selectedSizes)) {
            dispatch(itemUpdate(new UpdateData(_id, cartItem.selectedSizes, selectedSize).sizeNotExists()))
            enqueueSnackbar('Added to cart', {
                variant: 'success'
            })
        } else {
            dispatch(itemAdd(item))
            enqueueSnackbar('Added to cart', {
                variant: 'success'
            })
        }
    }

    return (
        <Button
            type='button'
            variant='contained'
            size='large'
            color='primary'
            className='w-100'
            endIcon={<ShoppingCartIcon />}
            onClick={handleAddCart}
            sx={{ margin: '16px 0px' }}
        >
            Add to Cart
        </Button>
    )
}