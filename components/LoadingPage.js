import Grid from '@material-ui/core/Grid'
import styles from './loadingPage.module.css'
import Box from '@material-ui/core/Box'
import Loader from "react-loader-spinner"

export default function LoadingPage() {
    return (
        <Grid container justifyContent='center' alignItems='center' className={styles.pageContainer}>
            <Box>
                <Loader width={100} height={100} timeout={100000} type='Oval' color='black' />
            </Box>
        </Grid>
    )
}