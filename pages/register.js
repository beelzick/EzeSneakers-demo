import { useState } from 'react';
import axios from 'axios'
import styles from '../styles/login.module.css'
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import ColoredLinearProgress from '../components/ColoredLinearProgress';
import { useRouter } from 'next/router'

export default function Register() {
    const router = useRouter()
    const [status, setStatus] = useState('idle') 
    const [date, setDate] = useState(new Date('2003-08-18T21:11:54'))
    const [userData, setUserData] = useState({
        fName: '',
        lName: '',
        email: '',
        password: ''
    })
    //idle, loading, suceeded, failed
    const handleDateChange = date => {
        setDate(date)
    }

    const handleFormChange = event => {
        const { name, value } = event.target

        setUserData(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }
    const handleRegisterClick = async () => {
        setStatus('loading')
        console.log('loading')
        const reqData = {
            ...userData,
            date: JSON.stringify(date)
        }
        const response = await axios.post('/api/users/register', reqData)
        if (response.data.sucess) {
            setStatus('suceeded')
        } else {
            setStatus('failed')
        }
    }

    if (status === 'suceeded') {
        router.push('/')
    }

    return (
        <>
            <div className={styles.loadingBar}>
                {(status === 'loading' || status === 'suceeded') && <ColoredLinearProgress />}
            </div>
            <Grid container className={styles.pageContainer}>
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <Box className={styles.h100}>
                        <Grid container direction='column' justifyContent='center' alignItems='center' className={styles.h100} >
                            <Typography variant='h6' component='p'>
                                EzeSneakers
                            </Typography>
                            <Typography variant='h4' component='h1' gutterBottom align='center'>
                                Become our member
                            </Typography>
                            <form>
                                <TextField
                                    onChange={handleFormChange}
                                    value={userData.fName}
                                    id="fName"
                                    name='fName'
                                    label="First Name"
                                    variant="outlined"
                                    className={styles.TextField}
                                    gutterBottom
                                    margin='normal'
                                    fullWidth
                                />
                                <TextField
                                    onChange={handleFormChange}
                                    id="lName"
                                    name='lName'
                                    label="Last Name"
                                    variant="outlined"
                                    className={styles.TextField}
                                    gutterBottom margin='normal'
                                    value={userData.lName}
                                    fullWidth
                                />
                                <TextField
                                    onChange={handleFormChange}
                                    id="email"
                                    name='email'
                                    label="Email"
                                    variant="outlined"
                                    className={styles.TextField}
                                    gutterBottom
                                    margin='normal'
                                    value={userData.email}
                                    fullWidth
                                />
                                <TextField
                                    id="cEmail"
                                    name='cEmail'
                                    label="Confirm Email"
                                    variant="outlined"
                                    className={styles.TextField}
                                    gutterBottom margin='normal'
                                    fullWidth
                                />
                                <TextField
                                    onChange={handleFormChange}
                                    type='password'
                                    id="password"
                                    name='password'
                                    label="Password"
                                    variant="outlined"
                                    className={styles.TextField}
                                    gutterBottom
                                    margin='normal'
                                    value={userData.password}
                                    fullWidth
                                />
                                <TextField
                                    type='password'
                                    id="cPassword"
                                    name='password'
                                    label="Confirm Password"
                                    variant="outlined"
                                    className={styles.TextField}
                                    gutterBottom
                                    margin='normal'
                                    fullWidth
                                />
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        fullWidth
                                        disableToolbar
                                        variant="inline"
                                        inputVariant='outlined'
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date"
                                        label="Birth date"
                                        value={date}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </form>
                            <Box my={4} className={styles.w100}>
                                <Button
                                    fullWidth
                                    disabled={(status === 'loading' || status === 'suceeded') ? true : false}
                                    type='button'
                                    variant='contained'
                                    size='large'
                                    color='primary'
                                    onClick={handleRegisterClick}
                                >
                                    register
                                </Button>
                            </Box>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={4} />
            </Grid>
        </>
    )
}
