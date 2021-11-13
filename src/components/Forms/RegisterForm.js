import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box'
import { useForm } from 'react-hook-form';
import FormInputText from './FormInputText';
import FormInputDate from './FormInputDate';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../helpers/formSchemas'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { pushErrorMessage, cleanErrorMessage } from '../../redux/slices/registerErrorSlice';
import { useRouter } from 'next/router';
import { loadingStart, loadingStop } from '../../redux/slices/loadingSlice'
import { selectIsLoading } from '../../redux/slices/loadingSlice';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useSnackbar } from 'notistack'

export default function Register() {
    const { enqueueSnackbar } = useSnackbar()
    const isLoading = useSelector(selectIsLoading)
    const router = useRouter()
    const dispatch = useDispatch()

    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(prevValue => !prevValue)
    }

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    });

    const onSubmit = async (data) => {
        dispatch(cleanErrorMessage())
        delete data.cPassword
        delete data.cEmail
        try {
            dispatch(loadingStart())
            const response = await axios.post('/api/auth/register', data)
            if (response.data.acknowledged) {
                router.push('/')
                dispatch(loadingStop())
                enqueueSnackbar('Successfully registered', {
                    variant: 'success'
                })
                enqueueSnackbar('Log in to use features for members', {
                    variant: 'success'
                })
            }
        } catch (error) {
            dispatch(pushErrorMessage(error.response.data.message))
            dispatch(loadingStop())
        }
    }

    return (
        <form className='w-100'>
            <FormInputText name='fName' label='First Name' errors={errors} register={register} />
            <FormInputText name='lName' label='Last Name ' errors={errors} register={register} />
            <FormInputText name='email' label='Email' type='email' errors={errors} register={register} />
            <Box pb={3}>
                <TextField
                    name='password'
                    error={errors.password && true}
                    helperText={errors.password?.message}
                    {...register('password')}
                    label='Password'
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>
                            <IconButton
                                onClick={handleClickShowPassword}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }}
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                />
            </Box>

            <FormInputDate name='birthDate' control={control} label='Birth Date' errors={errors} />

            <Box mt={4}>
                <LoadingButton
                    onClick={handleSubmit(onSubmit)}
                    fullWidth
                    type='button'
                    variant='contained'
                    size='large'
                    color='primary'
                    disabled={isLoading && true}
                >
                    register
                </LoadingButton>
            </Box>
        </form>
    )
}