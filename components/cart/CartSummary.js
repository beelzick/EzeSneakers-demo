import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { ImHome } from '@react-icons/all-files/im/ImHome'
import { BiPackage } from '@react-icons/all-files/bi/BiPackage'
import styles from './cart-product.module.css'
import { HiOutlineArrowNarrowRight } from '@react-icons/all-files/hi/HiOutlineArrowNarrowRight'
import makeStyles from '@mui/styles/makeStyles';
import { useDispatch } from 'react-redux'
import { demoDialogOpen } from '../../redux/slices/demoDialogSlice';
const useStyles = makeStyles((theme) => ({
    summaryContainer: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(2),
        }
    }
}))

const weight400 = { fontWeight: 400 }

export default function CartSummary({ subtotal }) {
    const classes = useStyles()
    const dispatch = useDispatch()

    return <Grid container className={classes.summaryContainer}>
        <Grid item xs={12}>
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
                <Button
                    fullWidth type='button' variant='contained' size='large' color='primary'
                    onClick={() => dispatch(demoDialogOpen())}
                >
                    Buy
                </Button>
            </Box>
            <Box
                sx={{
                    display: { xs: 'none', sm: 'flex' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: '20vh'
                }}
            >
                <BiPackage fontSize={60} />
                <Box mx={5}>
                    <HiOutlineArrowNarrowRight fontSize={40} />
                </Box>
                <ImHome fontSize={52.5} />
            </Box>
        </Grid>
        <Grid
            item xs={12}
            sx={{ display: { xs: 'none', sm: 'block' } }}
        >
        </Grid>
    </Grid>
}