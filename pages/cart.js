import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CartProduct from '../components/cart/CartProduct'
import { selectCartItems, itemRemove } from '../redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { totalPrice } from '../src/navbarHelpers'
import CartSummary from '../components/cart/CartSummary'
import EmptyCart from '../components/cart/EmptyCart'
import Head from 'next/head'
import DemoDialog from '../components/cart/DemoDialog'
export default function Cart() {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const subtotal = totalPrice(cartItems)

    cartItems.map(item => {
        if (!item.selectedSizes[0]) {
            dispatch(itemRemove(item._id))
        }
    })

    return <>
        <Head>
            <title>Your Cart | EzeSneakers</title>
        </Head>
        <Grid container className='page-container'>
            <Grid container>
                <Grid item xs={0} lg={1} xl={2}></Grid>
                <Grid item xs={12} lg={10} xl={8}>
                    <Typography variant='h3' component='h1' gutterBottom>
                        Your Cart
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sm={7} md={8} lg={9}>
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
                            {!cartItems[0] && <EmptyCart />}
                        </Grid>
                        <Grid item xs={12} sm={5} md={4} lg={3}>
                            <CartSummary subtotal={subtotal} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={0} lg={1} xl={2} />
            </Grid>
        </Grid>
        <DemoDialog />
    </>
}