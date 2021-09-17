import Box from '@mui/material/Box'
import { useForm } from 'react-hook-form';
import FormInputText from './FormInputText';
import Button from '@mui/material/Button';
import { changePasswordSchema } from '../../src/formSchemas'
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loadingStart, loadingStop, selectIsLoading } from '../../redux/slices/loadingSlice';
import LoadingButton from '@mui/lab/LoadingButton';

export default function ChangePasswordForm() {
    const dispatch = useDispatch()
    const isLoading = useSelector(selectIsLoading)
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(changePasswordSchema)
    });

    const onSubmit = async (data) => {
        dispatch(loadingStart())
        try {
            const response = await axios.patch('/api/auth/change-password', { newPassword: data.newPassword })
            console.log(response.data)
            dispatch(loadingStop())
        } catch (error) {
            console.log(error)
            dispatch(loadingStop())
        }


    }

    return (
        <form className='w100 h100'>
            <FormInputText name='newPassword' control={control} label='New Password' errors={errors} type='password' />
            <FormInputText name='cNewPassword' control={control} label='Confirm New Password' errors={errors} type='password' />

            <Box my={2} >
                <LoadingButton
                    onClick={handleSubmit(onSubmit)}
                    variant='contained'
                    size='large'
                    type='button'
                    fullWidth
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