import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Loader from 'react-loader-spinner'

export default function LoadingReduxPersist() {
    return (
        <Grid container justifyContent='center' alignItems='center' sx={{ height: '100vh' }}>
            <Box>
                <Loader width={250} height={250} type='Oval' color='black' />
            </Box>
        </Grid>
    )
}