import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import IconButton from '@material-ui/core/IconButton'
import { useState } from 'react'
import styles from './cartProduct.module.css'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItemById, itemUpdate } from '../redux/slices/cartSlice'
import { MenuProps, quantities, UpdateData } from '../src/cartProductHelpers'
import Image from 'next/image'

export default function CartProduct({ imgUrl, name, price, sex, tag, sizes, productId, sizeQty, selectedSize, sizeId }) {
    const dispatch = useDispatch()
    const [sneakerSize, setSneakerSize] = useState(selectedSize)
    const [qty, setQty] = useState(sizeQty)
    const cartItem = useSelector(state => selectCartItemById(state, productId))


    const handleSizeChange = (event) => {
        const { value } = event.target
        setSneakerSize(value)
        const updateData = new UpdateData(productId, cartItem.selectedSizes, sizeId).sizeChange(value)
        dispatch(itemUpdate(updateData))
    }

    const handleQtyChange = (event) => {
        const { value } = event.target
        setQty(value)
        const updateData = new UpdateData(productId, cartItem.selectedSizes, sizeId).qtyChange(value)
        dispatch(itemUpdate(updateData))
    }

    const handleItemRemove = () => {
        const updateData = new UpdateData(productId, cartItem.selectedSizes, sizeId).itemRemove()
        dispatch(itemUpdate(updateData))
    }

    return (
        <>
            <Box className={styles.paper}>
                <Box className={styles.imgContainer}>
                    <Image
                        src={'https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_200/v1629970595/ecom-portfolio/sample-sneaker_tprfhj.jpg'}
                        width='200'
                        height='200'
                    />
                </Box>
                <Box p={1}>
                    <Typography variant='h6' component='h2'>
                        {name}
                    </Typography>
                    <Breadcrumbs aria-label='breadcrumb'>
                        <Typography color='textPrimary' className={styles.breadcrumbs}>{sex}</Typography>
                        {tag && <Typography color='textPrimary' className={styles.breadcrumbs}>{tag}</Typography>}
                    </Breadcrumbs>
                    <Typography variant='h6' component='h2' gutterBottom>
                        {price} $
                    </Typography>
                    <FormControl className={styles.formControl}>
                        <InputLabel productId='size-selec-labelt'>Size</InputLabel>
                        <Select
                            labelId='size-select-label'
                            productId='size-select'
                            value={sneakerSize}
                            onChange={handleSizeChange}
                            autoWidth
                            MenuProps={MenuProps}
                        >
                            {sizes.map(size => size.qty && <MenuItem key={size._id} value={size.size}>{size.size}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <FormControl className={styles.formControlQty}>
                        <InputLabel productId='size-selec-labelt'>Quantity</InputLabel>
                        <Select
                            labelId='size-select-label'
                            productId='size-select'
                            value={qty}
                            onChange={handleQtyChange}
                            autoWidth
                            MenuProps={MenuProps}
                        >
                            {quantities.map(qty => <MenuItem key={qty} value={qty}>{qty}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Box>
                <div className={styles.deleteIconContainer}>
                    <IconButton onClick={handleItemRemove}>
                        <RemoveShoppingCartIcon />
                    </IconButton>
                </div>
            </Box>
        </>
    )
}