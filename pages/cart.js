import { Grid, Typography, Box, Button } from '@material-ui/core'
import styles from '../styles/cart.module.css'
import CartProduct from '../components/CartProduct'
import { selectCartItems } from '../redux/slices/cartSlice'
import { useSelector } from 'react-redux'

export default function Cart() {
    const cartItems = useSelector(selectCartItems)
    return (
        <>
            <Grid container className={styles.pageContainer}>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <Typography variant='h3' component='h1' gutterBottom>
                        Cart
                    </Typography>
                    <Grid container>
                        <Grid item xs={7}>
                            {cartItems && cartItems.map(item => <CartProduct
                                price={item.price}
                                name={item.name}
                                key={item._id}
                                tag={item.tag}
                                sex={item.sex}
                                sizes={item.sizes}
                                id={item._id}
                            />
                            )}
                        </Grid>
                        <Grid item xs={5}>
                            <Grid container>
                                <Grid item xs={7}>
                                    <Box pl={3}>
                                        <Typography variant='h4' component='h2' gutterBottom>
                                            Summary
                                        </Typography>
                                        <Grid container >
                                            <Grid item xs={6}>
                                                <Typography variant='h6' component='h3' gutterBottom>
                                                    Subtotal
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography variant='h6' component='h3' gutterBottom align='right'>
                                                    12$
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={6}>
                                                <Typography variant='h6' component='h3' gutterBottom>
                                                    Shipping
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography variant='h6' component='h3' gutterBottom align='right'>
                                                    5$
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Box className={styles.total}>
                                            <Grid container>
                                                <Grid item xs={6}>
                                                    <Typography variant='h6' component='h3' gutterBottom>
                                                        Total
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography variant='h6' component='h3' gutterBottom align='right'>
                                                        17$
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box mt={4}>
                                            <Button type='button' variant='contained' size='large' color='primary' className={styles.buyButton}>
                                                Buy
                                            </Button>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={5}></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} />
            </Grid>
        </>
    )
}