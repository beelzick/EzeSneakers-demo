import Box from '@material-ui/core/Box'
import { useForm } from 'react-hook-form';
import FormInputText from './FormInputText';
import Button from '@material-ui/core/Button';
import { loginSchema } from '../../src/formSchemas'
import { yupResolver } from '@hookform/resolvers/yup';
import { signIn } from 'next-auth/react'
// import { useSession, getSession } from "next-auth/react"

export default function LogInForm() {
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const onSubmit = async (data) => {
        const { email, password } = data
        const status = await signIn('credentials', {
            redirect: false,
            email,
            password
        })
        console.log(status)
    }

    return (
        <>
            <form className='w100 h100'>
                <FormInputText name='email' control={control} label='Email' errors={errors} />
                <FormInputText name='password' control={control} label='Password' errors={errors} type='password' />

                <Box my={4}>
                    <Button
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
            </form>
        </>
    )
}