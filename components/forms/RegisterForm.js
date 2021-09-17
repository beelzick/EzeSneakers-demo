import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box'
import { useForm } from 'react-hook-form';
import FormInputText from './FormInputText';
import FormInputDate from './FormInputDate';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../src/formSchemas'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { pushErrorMessage, cleanErrorMessage } from '../../redux/slices/registerErrorSlice';
import { useRouter } from 'next/router';
import { loadingStart, loadingStop } from '../../redux/slices/loadingSlice'
import { selectIsLoading } from '../../redux/slices/loadingSlice';

export default function Register() {
    const isLoading = useSelector(selectIsLoading)
    const router = useRouter()
    const dispatch = useDispatch()
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    });

    const onSubmit = async (data) => {
        dispatch(cleanErrorMessage())
        delete data.cPassword
        delete data.cEmail
        try {
            dispatch(loadingStart())
            const response = await axios.post('/api/auth/register', data)
            console.log(data)
            if (response.data.acknowledged) {
                router.push('/')
                dispatch(loadingStop())
            }
        } catch (error) {
            dispatch(pushErrorMessage(error.response.data.message))
            dispatch(loadingStop())
        }
    }

    return (
        <form className='w100'>

            <FormInputText name='fName' control={control} label='First Name' errors={errors} />
            <FormInputText name='lName' control={control} label='Last Name ' errors={errors} />
            <FormInputText name='email' control={control} label='Email' errors={errors} />
            <FormInputText name='cEmail' control={control} label='Confirm Email' errors={errors} />
            <FormInputText name='password' control={control} label='Password' errors={errors} type='password' />
            <FormInputText name='cPassword' control={control} label='Confirm Password' errors={errors} type='password' />
            <FormInputDate name='birthDate' control={control} label='Birth Date' errors={errors} />

            <Box my={4}>
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