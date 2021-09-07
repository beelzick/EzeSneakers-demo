import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { useForm } from 'react-hook-form';
import FormInputText from './FormInputText';
import FormInputDate from './FormInputDate';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../src/formSchemas'
import axios from 'axios';
import { getSession } from 'next-auth/react';

export default function Register() {
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    });
    const onSubmit = async (data) => {
        delete data.cPassword
        delete data.cEmail
        const response = await axios.post('/api/auth/register', data)
        console.log(response.data)
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
                <Button
                    onClick={handleSubmit(onSubmit)}
                    fullWidth
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