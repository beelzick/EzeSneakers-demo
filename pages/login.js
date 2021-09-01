import { useState } from 'react';
import styles from '../styles/login.module.css'
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';


export default function Login() {
    const [selectedDate, setSelectedDate] = useState(new Date('2005-08-18T21:11:54'))
    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    return (
        <>
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
                            <TextField id="email" label="Email" variant="outlined"
                                className={styles.TextField} gutterBottom margin='normal' fullWidth />
                            <TextField type='password' id="password" label="Password" variant="outlined"
                                className={styles.TextField} gutterBottom margin='normal' fullWidth />


                            <Box my={4}>
                                <Button type='button' variant='contained' size='large' color='primary'>
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