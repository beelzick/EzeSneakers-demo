import Grid from '@mui/material/Grid'
import styles from './loadingPage.module.css'
import Box from '@mui/material/Box'
import Loader from "react-loader-spinner"

export default function LoadingPage() {
    return (
        <Grid container justifyContent='center' alignItems='center' className={styles.pageContainer}>
            <Box>
                <Loader width={250} height={250} timeout={100000} type='Oval' color='black' />
            </Box>
        </Grid>
    )
}