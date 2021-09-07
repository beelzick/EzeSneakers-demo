import Box from '@material-ui/core/Box'
import { useForm } from 'react-hook-form';
import FormInputText from './FormInputText';
import Button from '@material-ui/core/Button';
import { changePasswordSchema } from '../../src/formSchemas'
import { yupResolver } from '@hookform/resolvers/yup';


export default function ChangePasswordForm() {
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(changePasswordSchema)
    });
    const onSubmit = (data) => alert(JSON.stringify(data));

    return (
        <form className='w100 h100'>
            <FormInputText name='password' control={control} label='New Password' errors={errors} type='password' />
            <FormInputText name='cPassword' control={control} label='Confirm New Password' errors={errors} type='password' />

            <Box my={4} >
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