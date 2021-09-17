import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Loader from 'react-loader-spinner'
import styles from './loadingPage.module.css'

export default function LoadingReduxPersist() {
    return <Grid container justifyContent='center' alignItems='center' className={styles.reduxPageContainer}>
        <Box>
            <Loader width={250} height={250} timeout={100000} type='Oval' color='black' />
        </Box>
    </Grid>
}