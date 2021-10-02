import { useEffect } from 'react';
import RegisterForm from '../components/forms/RegisterForm';
import { Grid, Box, Typography } from '@mui/material'
import { useSession, getSession } from "next-auth/react"
import { useRouter } from 'next/router';
import LoadingPage from '../components/loadings/LoadingPage';
import { useSelector } from 'react-redux';
import { selectErrorMessage } from '../redux/slices/registerErrorSlice';
import Head from 'next/head'
export default function Register() {

    const errorMessage = useSelector(selectErrorMessage)
    const router = useRouter()
    const { data: session } = useSession()

    useEffect(() => {
        if (session) {
            router.back()
        }
    }, [session, router])

    if (!session) {
        return (
            <>
                <Head>
                    <title>Register | EzeSneakers</title>
                    <meta description='EzeSneakers offers professionally restored shoes at the lowest prices. 
                    Become a member to benefit from all the possibilities of the website' />
                </Head>
                <Grid
                    container
                    className='page-container'
                    alignItems=' center'
                    justifyContent='center'
                    sx={{ minHeight: { sm: '70vh' } }}
                >
                    <Grid item xs={8} md={6} lg={4}>
                        <Grid container direction='column'>
                            <Typography variant='h4' component='h1' align='center' sx={{ width: '100%' }}>
                                Become our member
                            </Typography>
                            <Typography variant='caption' color='error' className='title-error-container'>
                                {errorMessage}
                            </Typography>
                            <RegisterForm />
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    } else {
        return <LoadingPage />
    }

}