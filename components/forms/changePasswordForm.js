import Box from '@material-ui/core/Box'
import { useForm } from 'react-hook-form';
import FormInputText from './FormInputText';
import Button from '@material-ui/core/Button';
import { changePasswordSchema } from '../../src/formSchemas'
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';


export default function ChangePasswordForm() {
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(changePasswordSchema)
    });

    const onSubmit = async (data) => {
        try {
            const response = await axios.patch('/api/auth/change-password', { newPassword: data.newPassword })
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }


    }

    return (
        <form className='w100 h100'>
            <FormInputText name='newPassword' control={control} label='New Password' errors={errors} type='password' />
            <FormInputText name='cNewPassword' control={control} label='Confirm New Password' errors={errors} type='password' />

            <Box my={2} >
                <Button
                    onClick={handleSubmit(onSubmit)}
                    variant='contained'
                    size='large'
                    type='button'
                    fullWidth
                    color='primary'
                    fullWidth
                >
                    Confirm
                </Button>
            </Box>
        </form>
    )
}