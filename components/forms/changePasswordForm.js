import Box from '@material-ui/core/Box'
import { useForm } from 'react-hook-form';
import FormInputText from './FormInputText';
import Button from '@material-ui/core/Button';
import { changePasswordSchema } from '../../src/formSchemas'
import { yupResolver } from '@hookform/resolvers/yup';


export default function changePasswordForm() {
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(changePasswordSchema)
    });
    const onSubmit = (data) => alert(JSON.stringify(data));

    return (
        <>
            <form className='w100 h100'>
                <FormInputText name='password' control={control} label='New Password' errors={errors} type='password' />
                <FormInputText name='cPassword' control={control} label='Confirm New Password' errors={errors} type='password' />
            </form>
            <Box my={4}>
                <Button
                    // disabled={(status === 'loading' || status === 'suceeded') ? true : false}
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

        </>
    )
}

{/* <form className='w100 h100'>
<TextField
    id='password'
    type='password'
    label='New Password'
    variant='outlined'
    name='password'
    className={styles.TextField}
    gutterBottom
    margin='normal'
    fullWidth
/>
<TextField
    type='password'
    id='cPassword'
    label='Confirm New Password'
    variant='outlined'
    name='cPassword'
    className={styles.TextField}
    gutterBottom
    margin='normal'
    fullWidth
/>
</form>
<Box my={4} className='w100'>
<Button
    // disabled={(status === 'loading' || status === 'suceeded') ? true : false}
    type='button'
    variant='contained'
    size='large'
    color='primary'
    fullWidth
>
    confirm
</Button>
</Box> */}