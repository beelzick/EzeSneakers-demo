import { Box, Button } from '@material-ui/core'
import { useForm } from 'react-hook-form';
import FormInputText from './FormInputText';
import FormInputDate from './FormInputDate';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../src/formSchemas'

export default function Register() {
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    });
    const onSubmit = (data) => alert(JSON.stringify(data))

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
                <Button
                    onClick={handleSubmit(onSubmit)}
                    fullWidth
                    // disabled={(status === 'loading' || status === 'suceeded') ? true : false}
                    type='button'
                    variant='contained'
                    size='large'
                    color='primary'
                >
                    register
                </Button>
            </Box>
        </form>
    )
}