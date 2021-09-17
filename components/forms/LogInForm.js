import Box from '@mui/material/Box'
import { useForm } from 'react-hook-form';
import FormInputText from './FormInputText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { loginSchema } from '../../src/formSchemas'
import { yupResolver } from '@hookform/resolvers/yup';
import { signIn } from 'next-auth/react'
import { useDispatch, useSelector } from 'react-redux';
import { loadingStart, loadingStop } from '../../redux/slices/loadingSlice'
import { useState } from 'react'
import { selectIsLoading } from '../../redux/slices/loadingSlice';
import LoadingButton from '@mui/lab/LoadingButton';

export default function LogInForm() {
    const isLoading = useSelector(selectIsLoading)
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState('')
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const onSubmit = async (data) => {
        const { email, password } = data
        dispatch(loadingStart())

        const status = await signIn('credentials', {
            redirect: false,
            email,
            password
        })
        if (!status.error) {
            dispatch(loadingStop())
            return
        } else {
            setErrorMessage(status.error)
            dispatch(loadingStop())
        }
    }

    return (
        <>
            <Grid container direction='column' justifyContent='center' alignItems='center' className='w100'>
                <Typography variant='h6' component='p'>
                    EzeSneakers
                </Typography>
                <Typography variant='h4' component='h1'>
                    Log In
                </Typography>
                <Grid container direction='column' alignContent='start' className='title-error-container'>
                    <Typography variant='caption' color='error'>
                        {errorMessage || ''}
                    </Typography>
                </Grid>
                <form className='w100 h100'>
                    <FormInputText name='email' control={control} label='Email' errors={errors} />
                    <FormInputText name='password' control={control} label='Password' errors={errors} type='password' />

                    <Box my={1}>
                        <LoadingButton
                            onClick={handleSubmit(onSubmit)}
                            variant='contained'
                            size='large'
                            type='button'
                            fullWidth
                            color='primary'
                            loading={isLoading && true}
                        >
                            Log in
                        </LoadingButton>
                    </Box>
                </form>
            </Grid>

        </>
    )
}