import { Grid, Typography, Box, Button } from '@material-ui/core'
import styles from '../styles/cart.module.css'
import axios from 'axios'
import useSWR from 'swr'
import CartProduct from '../components/CartProduct'
const fetcher = url => axios.get(url).then(res => res.data.data)

export default function Cart() {
    const { data, error } = useSWR('/api/test-cart', fetcher)
    console.log(data)
    return (
        <>
            <Grid container className={styles.pageContainer}>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h3' component='h1' gutterBottom>
                        Cart
                    </Typography>
                    <Grid container>
                        <Grid item xs={9}>
                            {data && data.map(item => <CartProduct
                                price={item.price}
                                name={item.name}
                                key={item._id}
                                tag={item.tag}
                                sex={item.sex}
                                sizes={item.sizes}
                            />
                            )}
                        </Grid>
                        <Grid item xs={3}>
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
                    </Grid>
                </Grid>
                <Grid item xs={3}>

                </Grid>
            </Grid>
        </>
    )
}