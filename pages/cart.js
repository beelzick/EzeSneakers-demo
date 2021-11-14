import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CartProduct from '../src/components/Cart/CartProduct'
import { selectCartItems, itemRemove } from '../src/redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { totalPrice } from '../src/helpers/navbarHelpers'
import CartSummary from '../src/components/Cart/CartSummary'
import EmptyCart from '../src/components/Cart/EmptyCart'
import Head from 'next/head'
import DemoDialog from '../src/components/Cart/DemoDialog'

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
        <>
            <Head>
                <title>Your Cart | EzeSneakers</title>
                <meta name='robots' content='noindex' />
            </Head>
            <Grid container className='page-container' justifyContent='center'>
                <Grid item xs={12} lg={10} xl={8}>
                    <Typography variant='h3' component='h1' gutterBottom>
                        Your Cart
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sm={7} md={8} lg={9}>
                            {cartItems && cartItems.map(item => {
                                return item.selectedSizes.map((itemSize) => (
                                    <CartProduct
                                        tags={item.tags}
                                        price={item.price}
                                        name={item.name}
                                        key={itemSize.id}
                                        gender={item.gender}
                                        sex={item.sex}
                                        sizes={item.sizes}
                                        sizeId={itemSize.id}
                                        productId={item._id}
                                        sizeQty={itemSize.qty}
                                        selectedSize={itemSize.size}
                                        imgUrl={item.imgUrl}
                                    />)
                                )
                            })}
                            {!cartItems[0] && <EmptyCart />}
                        </Grid>
                        <Grid item xs={12} sm={5} md={4} lg={3}>
                            <CartSummary subtotal={subtotal} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <DemoDialog />
        </>
    )
}
