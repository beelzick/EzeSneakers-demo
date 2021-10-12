import RegisterForm from '../components/forms/RegisterForm';
import { Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { selectErrorMessage } from '../redux/slices/registerErrorSlice';
import Head from 'next/head'
import Link from '@mui/material/Link'
import { useDispatch } from 'react-redux';
import { dialogOpen } from '../redux/slices/loginDialogSlice';

export default function Register() {
    const dispatch = useDispatch()
    const errorMessage = useSelector(selectErrorMessage)

    return (
        <>
            <Head>
                <title>Register | EzeSneakers</title>
                <meta name='description' content='EzeSneakers offers professionally restored shoes at the lowest prices. 
                    Become a member to benefit from all the possibilities of the website' />
            </Head>
            <Grid
                container
                className='page-container'
                alignItems=' center'
                justifyContent='center'
            >
                <Grid item xs={10} sm={7} md={6} lg={4}>
                    <Grid container direction='column'>
                        <Typography variant='h4' component='h1' align='center' sx={{ width: '100%' }}>
                            Become our member
                        </Typography>
                        <Typography variant='caption' color='error' className='title-error-container'>
                            {errorMessage}
                        </Typography>
                        <RegisterForm />
                        <Typography mt={1}>
                            Already have an account?&nbsp;
                            <Link sx={{ cursor: 'pointer' }} onClick={() => dispatch(dialogOpen())} >
                                Log in
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )

}