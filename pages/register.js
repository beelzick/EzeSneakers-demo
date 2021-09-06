import { useState } from 'react';
import RegisterForm from '../components/forms/RegisterForm';
import styles from '../styles/login.module.css'
import { Grid, Box, Typography } from '@material-ui/core'

export default function Register() {
    const [status, setStatus] = useState('idle')
    return (
        <>
            {/* <div className={styles.loadingBar}>
                {(status === 'loading' || status === 'suceeded') && <ColoredLinearProgress />}
            </div> */}
            <Grid container className={styles.pageContainer}>
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <Box className='h100'>
                        <Grid container direction='column' justifyContent='center' alignItems='center' className='h100' >
                            <Typography variant='h6' component='p'>
                                EzeSneakers
                            </Typography>
                            <Typography variant='h4' component='h1' gutterBottom align='center'>
                                Become our member
                            </Typography>
                            <RegisterForm />
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={4} />
            </Grid>
        </>
    )
}
