import { useState } from 'react';
import styles from '../styles/login.module.css'
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core'
import axios from 'axios'
import { useRouter } from 'next/router'
import ColoredLinearProgress from '../components/ColoredLinearProgress';
export default function Login() {
    const router = useRouter()
    const [status, setStatus] = useState('idle')
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const handleFormChange = event => {
        const { name, value } = event.target
        setUserData(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }
    const handleLogin = async () => {
        setStatus('loading')
        const reqData = {
            ...userData
        }
        const response = await axios.post('/api/users/login', reqData)
        if (response.data.sucess) {
            setStatus('suceeded')
        } else {
            setStatus('failed')
        }
    }
    if (status === 'suceeded') {
        window.location.replace('/')

    }
    return (
        <>
            <div className={styles.loadingBar}>
                {(status === 'loading' || status === 'suceeded') && <ColoredLinearProgress />}
            </div>
            <Grid container className={styles.pageContainer}>
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <form className={styles.h100}>
                        <Grid container direction='column' justifyContent='center' alignItems='center' className={styles.h100} >
                            <Typography variant='h6' component='p'>
                                EzeSneakers
                            </Typography>
                            <Typography variant='h4' component='h1' gutterBottom align='center'>
                                Log In
                            </Typography>
                            <TextField
                                id='email'
                                label='Email'
                                variant='outlined'
                                name='email'
                                className={styles.TextField}
                                gutterBottom
                                margin='normal'
                                fullWidth
                                value={userData.email}
                                onChange={handleFormChange}
                            />
                            <TextField
                                type='password'
                                id='password'
                                label='Password'
                                variant='outlined'
                                name='password'
                                className={styles.TextField}
                                gutterBottom
                                margin='normal'
                                fullWidth
                                value={userData.password}
                                onChange={handleFormChange}
                            />
                            <Box my={4}>
                                <Button
                                    disabled={(status === 'loading' || status === 'suceeded') ? true : false}
                                    type='button'
                                    variant='contained'
                                    size='large'
                                    color='primary'
                                    onClick={handleLogin}
                                >
                                    Log in
                                </Button>
                            </Box>
                        </Grid>
                    </form>
                </Grid>
                <Grid item xs={4} />
            </Grid>
        </>
    )
}