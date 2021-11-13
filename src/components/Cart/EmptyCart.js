import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BoxSvg from '../Svg/BoxSvg'

export default function EmptyCart() {
    return (
        <Grid container direction='column' alignItems='center'>
            <Grid container justifyContent='center' mb={3} >
                <BoxSvg />
            </Grid>
            <Typography variant='h4' component='h2' align='center' mb={1.5} >
                Your shopping cart is empty
            </Typography>
            <Typography variant='h5' component='h3' align='center' mt={1} sx={{ fontFamily: 'montserrat, sans-serif' }} mb={4}>
                Return to the store to add items
            </Typography>
        </Grid>
    )
}