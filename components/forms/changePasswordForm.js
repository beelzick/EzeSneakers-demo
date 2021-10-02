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

export default function ChangePasswordForm() {
    const { enqueueSnackbar } = useSnackbar()
    const dispatch = useDispatch()
    const isLoading = useSelector(selectIsLoading)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(changePasswordSchema)
    });

    const onSubmit = async (data) => {
        dispatch(loadingStart())
        try {
            const response = await axios.patch('/api/auth/change-password', { newPassword: data.newPassword })
            console.log(response.data)
            dispatch(loadingStop())
            enqueueSnackbar('Password successfully updated', {
                variant: 'success'
            })
        } catch (error) {
            dispatch(loadingStop())
            enqueueSnackbar('Couldn\'t update your password')
        }


    }

    return (
        <form className='w-100 h-100'>
            <FormInputText name='newPassword' label='New Password' errors={errors} type='password' register={register} />
            <FormInputText name='cNewPassword' label='Confirm New Password' errors={errors} type='password' register={register} />

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