import { useState } from 'react';
import styles from '../styles/login.module.css'
import { Grid, Typography } from '@material-ui/core'
import axios from 'axios'
import { useRouter } from 'next/router'
import ColoredLinearProgress from '../components/ColoredLinearProgress';
import LogInForm from '../components/forms/LoginForm';
import { useSession, getSession } from 'next-auth/react'
import AcessDenied from '../components/AcessDenied';

export default function Login() {
    const router = useRouter()
    const { data: session } = useSession()

    if (!session) {
        return (
            <>
                <Grid container className={styles.loginPage}>
                    <Grid item xs={4} />
                    <Grid item xs={4}>
                        <Grid container direction='column' justifyContent='center' alignItems='center' className={styles.h100} >
                            <Typography variant='h6' component='p'>
                                EzeSneakers
                            </Typography>
                            <Typography variant='h4' component='h1' gutterBottom align='center'>
                                Log In
                            </Typography>
                            <LogInForm />
                        </Grid>
                    </Grid>
                    <Grid item xs={4} />
                </Grid>
            </>
        )
    } else {
        return <AcessDenied />
    }

}

export async function getServerSideProps(context) {
    return {
        props: {
            session: await getSession(context)
        },
    }
}