import Grid from '@mui/material/Grid'
import Loader from 'react-loader-spinner'
import styles from './loadingPage.module.css'

export default function InfScrollLoading() {
    return <Grid container justifyContent='center' alignItems='center' className={styles.infLoading}>
        <Loader width={40} height={40} timeout={10000} type='Oval' color='black' />
    </Grid>
}