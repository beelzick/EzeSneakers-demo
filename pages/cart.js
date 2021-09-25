import { Grid, Typography, Box, Button } from '@mui/material'
import styles from '../styles/cart.module.css'
import CartProduct from '../components/cart/CartProduct'
import { selectCartItems, itemRemove } from '../redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { totalPrice } from '../src/navbarHelpers'

const weight400 = { fontWeight: 400 }

export default function Cart() {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const subtotal = totalPrice(cartItems)
    cartItems.map(item => {
        if (!item.selectedSizes[0]) {
            dispatch(itemRemove(item._id))
        }
    })

    return (
        <Grid container className={styles.pageContainer}>
            <Grid item xs={3} />
            <Grid item xs={6}>
                <Typography variant='h3' component='h1' gutterBottom>
                    Your Cart
                </Typography>
                <Grid container>
                    <Grid item xs={7}>
                        {cartItems && cartItems.map(item => {
                            return item.selectedSizes.map((itemSize) => {
                                return (<CartProduct
                                    price={item.price}
                                    name={item.name}
                                    key={itemSize.id}
                                    tag={item.tag}
                                    sex={item.sex}
                                    sizes={item.sizes}
                                    sizeId={itemSize.id}
                                    productId={item._id}
                                    sizeQty={itemSize.qty}
                                    selectedSize={itemSize.size}
                                />)
                            })
                        })}
                        {!cartItems[0] && <div>Your cart is empty</div>}
                    </Grid>
                    <Grid item xs={5}>
                        <Grid container>
                            <Grid item xs={9} pl={3}>
                                <Typography variant='h4' component='h2' gutterBottom >
                                    Summary
                                </Typography>
                                <Grid container >
                                    <Grid item xs={6}>
                                        <Typography variant='h6' component='h3' gutterBottom sx={weight400}>
                                            Subtotal
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant='h6' component='h3' gutterBottom align='right' sx={weight400}>
                                            {subtotal.toFixed(2)} $
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography variant='h6' component='h3' gutterBottom sx={weight400}>
                                            Shipping
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant='h6' component='h3' gutterBottom align='right' sx={weight400}>
                                            {subtotal ? (subtotal < 100 ? '10.00 $' : 'Free') : '0.00 $'}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Box className={styles.total} sx={weight400}>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography variant='h6' component='h3' gutterBottom sx={weight400}>
                                                Total
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant='h6' component='h3' gutterBottom align='right' sx={weight400}>
                                                {subtotal ? (subtotal < 100 ? (subtotal + 10) : subtotal).toFixed(2) : '0.00'} $
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Typography variant='caption' component='span' mt={0.5}>
                                    Free delivery <strong>from 100 $</strong>
                                </Typography>
                                <Box mt={2.5}>
                                    <Button type='button' variant='contained' size='large' color='primary' className={styles.buyButton}>
                                        Buy
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid item xs={3}></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3} />
        </Grid>
    )
}