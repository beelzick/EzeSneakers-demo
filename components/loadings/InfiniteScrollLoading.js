import Grid from '@mui/material/Grid'
import Loader from 'react-loader-spinner'
import styles from './loading.module.css'

export default function InfScrollLoading() {
    return <Grid container justifyContent='center' alignItems='center' className={styles['scroll-loading']}>
        <Loader width={40} height={40} timeout={100000} type='Oval' color='black' />
    </Grid>
}