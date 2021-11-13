import Grid from '@mui/material/Grid'
import Loader from 'react-loader-spinner'

export default function InfScrollLoading() {
    return (
        <Grid container justifyContent='center' alignItems='center' sx={{ height: '40px' }}>
            <Loader width={40} height={40} type='Oval' color='black' />
        </Grid>
    )
}