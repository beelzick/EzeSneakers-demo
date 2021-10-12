import Box from '@mui/material/Box'
import { useForm } from 'react-hook-form';
import FormInputText from './FormInputText';
import { changePasswordSchema } from '../../src/formSchemas'
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loadingStart, loadingStop, selectIsLoading } from '../../redux/slices/loadingSlice';
import LoadingButton from '@mui/lab/LoadingButton';
import { useSnackbar } from 'notistack'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';

export default function ChangePasswordForm() {
    const [showPassword, setShowPassword] = useState(false)
    const { enqueueSnackbar } = useSnackbar()
    const dispatch = useDispatch()
    const isLoading = useSelector(selectIsLoading)

    const handleClickShowPassword = () => {
        setShowPassword(prevValue => !prevValue)
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(changePasswordSchema)
    });

    const onSubmit = async (data) => {
        dispatch(loadingStart())
        try {
            const { newPassword, oldPassword } = data
            const response = await axios.patch('/api/auth/change-password', { oldPassword, newPassword })
            enqueueSnackbar(response.data.message, {
                variant: 'success'
            })
        } catch (e) {
            enqueueSnackbar(e.response.data.message, {
                variant: 'error'
            })
        }
        dispatch(loadingStop())
    }

    return (
        <form className='w-100 h-100'>
            <FormInputText name='oldPassword' label='Old Password' errors={errors} type='password' register={register} />
            <Box pb={3}>
                <TextField
                    name='newPassword'
                    error={errors.newPassword && true}
                    helperText={errors.newPassword?.message}
                    {...register('newPassword')}
                    label='New Password'
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

            <Box my={2} >
                <LoadingButton
                    onClick={handleSubmit(onSubmit)}
                    variant='contained'
                    size='large'
                    type='button'
                    color='primary'
                    fullWidth
                    loading={isLoading}
                >
                    Confirm
                </LoadingButton>
            </Box>
        </form>
    )
}