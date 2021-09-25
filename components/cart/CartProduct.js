import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import IconButton from '@mui/material/IconButton'
import CardActionArea from '@mui/material/CardActionArea'
import { useState } from 'react'
import styles from './cart-product.module.css'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItemById, itemUpdate } from '../../redux/slices/cartSlice'
import { MenuProps, quantities, UpdateData } from '../../src/cartProductHelpers'
import OutlinedInput from '@mui/material/OutlinedInput';
import NextLink from 'next/link'
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

    return <>
        <Box className={styles.paper}>
            <Box className={styles.imgContainer}>
                <NextLink href={`/sneakers/${productId}`} passHref>
                    <CardActionArea sx={{ borderRadius: '5px' }}>
                        <Image
                            src={'https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_200/v1629970595/ecom-portfolio/sample-sneaker_tprfhj.jpg'}
                            width='200'
                            height='200'
                            className={styles.image}
                        />
                    </CardActionArea>
                </NextLink>
            </Box>
            <Box p={1}>
                <NextLink href={`/sneakers/${productId}`} passHref>
                    <Typography variant='h6' component='h2' sx={{ cursor: 'pointer' }}>
                        {name}
                    </Typography>
                </NextLink>
                <Breadcrumbs aria-label='breadcrumb'>
                    <Typography color='textPrimary' className={styles.breadcrumbs}>{sex}</Typography>
                    {tag && <Typography color='textPrimary' className={styles.breadcrumbs}>{tag}</Typography>}
                </Breadcrumbs>
                <Typography variant='h6' component='h3' gutterBottom sx={{ fontWeight: 400 }}>
                    {price} $
                </Typography>
                <FormControl className={styles.formControl}>
                    <InputLabel id='size-selec-label'>Size</InputLabel>
                    <Select
                        labelId='size-select-label'
                        id='size-select'
                        value={sneakerSize}
                        onChange={handleSizeChange}
                        input={<OutlinedInput label='Size' />}
                        MenuProps={MenuProps}
                    >
                        {sizes.map(size => size.qty && <MenuItem key={size._id} value={size.size}>{size.size}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl className={styles.formControlQty}>
                    <InputLabel id='size-selec-label'>Quantity</InputLabel>
                    <Select
                        labelId='size-select-label'
                        id='size-select'
                        value={qty}
                        onChange={handleQtyChange}
                        input={<OutlinedInput label='Quantity' />}
                        MenuProps={MenuProps}
                    >
                        {quantities.map(qty => <MenuItem key={qty} value={qty}>{qty}</MenuItem>)}
                    </Select>
                </FormControl>
            </Box>
            <div className={styles.deleteIconContainer}>
                <IconButton onClick={handleItemRemove} size="large">
                    <RemoveShoppingCartIcon sx={{ color: 'black' }} />
                </IconButton>
            </div>
        </Box >
    </>;
}