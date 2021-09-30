import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
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
import makeStyles from '@mui/styles/makeStyles';
import { motion, AnimatePresence } from 'framer-motion'
import Chip from '@mui/material/Chip'

const useStyles = makeStyles((theme) => ({
    productContent: {
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(2)
        }
    },
    productContainer: {
        [theme.breakpoints.down('md')]: {
            borderBottom: '0.7px solid rgba(0, 0, 0, 0.125)'
        }
    }
}))


export default function CartProduct({ imgUrl, name, price, sex, tag, sizes, productId, sizeQty, selectedSize, sizeId }) {
    const dispatch = useDispatch()
    const [sneakerSize, setSneakerSize] = useState(selectedSize)
    const [qty, setQty] = useState(sizeQty)
    const cartItem = useSelector(state => selectCartItemById(state, productId))
    const classes = useStyles()

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
        <Grid container mb={3} className={classes.productContainer}>
            <Grid container>
                <Grid item xs={12} md={7} lg={6}>
                    <NextLink href={`/sneakers/${productId}`} passHref>
                        <CardActionArea sx={{ borderRadius: '10px', width: 'fit-content' }}>
                            <Image
                                src={'https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_540/v1629970595/ecom-portfolio/sample-sneaker_tprfhj.webp'}
                                width='540'
                                height='540'
                                className={styles.image}
                            />
                        </CardActionArea>
                    </NextLink>
                </Grid>
                <Grid item xs={12} md={5} lg={6} p={1} pl={0} className={classes.productContent}>
                    <NextLink href={`/sneakers/${productId}`} passHref>
                        <Typography variant='h5' component='h2' sx={{ cursor: 'pointer', width: '100%' }}>
                            {name}
                        </Typography>
                    </NextLink>
                    <Box>
                        <Chip color='primary' label={sex} size='small' sx={{ marginRight: '5px' }} />
                        {tag && <Chip color='primary' label={tag} size='small' />}
                    </Box>
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
                            autoWidth
                            input={<OutlinedInput label='Size' className={styles.input} />}
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
                            autoWidth
                            input={<OutlinedInput label='Quantity' className={styles.input} />}
                            MenuProps={MenuProps}
                        >
                            {quantities.map(qty => <MenuItem key={qty} value={qty}>{qty}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <Box pt={3}>
                        <Button
                            onClick={handleItemRemove}
                            endIcon={<RemoveShoppingCartIcon />}
                        >
                            Remove
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </>;
}