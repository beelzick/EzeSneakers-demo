import { useEffect } from 'react';
import RegisterForm from '../components/forms/RegisterForm';
import styles from '../styles/login.module.css'
import { Grid, Box, Typography } from '@mui/material'
import { useSession, getSession } from "next-auth/react"
import { useRouter } from 'next/router';
import LoadingPage from '../components/loadings/LoadingPage';
import { useSelector } from 'react-redux';
import { selectErrorMessage } from '../redux/slices/registerErrorSlice';

export default function Register() {

    const errorMessage = useSelector(selectErrorMessage)
    const router = useRouter()
    const { data: session } = useSession()

    useEffect(() => {
        if (session) {
            router.back()
        }
    }, [session])

    if (!session) {
        return (
            <>
                <Grid container className={styles.pageContainer}>
                    <Grid item xs={4} />
                    <Grid item xs={4}>
                        <Box className='h100'>
                            <Grid container direction='column' justifyContent='center' alignItems='center' className='h100' >
                                <Grid container direction='column' alignContent='start' >
                                    <Typography variant='h4' component='h1' align='center' sx={{ width: '100%' }}>
                                        Become our member
                                    </Typography>
                                    <Typography variant='caption' color='error' className='title-error-container'>
                                        {errorMessage}
                                    </Typography>
                                </Grid>
                                <RegisterForm />
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={4} />
                </Grid>
            </>
        )
    } else {
        return <LoadingPage />
    }

}

export async function getServerSideProps(context) {
    return {
        props: {
            session: await getSession(context)
        },
    }
}