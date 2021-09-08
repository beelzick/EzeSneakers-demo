import Box from '@material-ui/core/Box'
import { useForm } from 'react-hook-form';
import FormInputText from './FormInputText';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { loginSchema } from '../../src/formSchemas'
import { yupResolver } from '@hookform/resolvers/yup';
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { loadingStart, loadingStop } from '../../redux/features/loadingSlice'
import styles from './loginForm.module.css'
import { useState } from 'react'

export default function LogInForm() {
    const router = useRouter()
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
            router.push('/')
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
                <Grid container direction='column' alignContent='start' alignItems='start' className={styles.titleErrorContainer}>
                    <Typography variant='h4' component='h1' align='center'>
                        Log In
                    </Typography>
                    <Typography variant='caption' color='error'>
                        {errorMessage || ''}
                    </Typography>
                </Grid>
                <form className='w100 h100'>
                    <FormInputText name='email' control={control} label='Email' errors={errors} />
                    <FormInputText name='password' control={control} label='Password' errors={errors} type='password' />

                    <Box my={1}>
                        <Button
                            onClick={handleSubmit(onSubmit)}
                            variant='contained'
                            size='large'
                            type='button'
                            fullWidth
                            color='primary'
                        >
                            Log in
                        </Button>
                    </Box>
                </form>
            </Grid>

        </>
    )
}