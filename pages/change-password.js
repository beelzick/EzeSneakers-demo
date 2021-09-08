import styles from '../styles/login.module.css'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ChangePasswordForm from '../components/forms/ChangePasswordForm';
import { useSession, getSession } from "next-auth/react"
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LoadingPage from '../components/LoadingPage';
import Box from '@material-ui/core/Box'
export default function ChangePassword() {
    const router = useRouter()
    const { data: session } = useSession()
    useEffect(() => {
        if (!session) {
            router.push('/')
        }
    },[])
    if (session) {
        return (
            <>
                <Grid container className={styles.changePassword}>
                    <Grid item xs={4} />
                    <Grid item xs={4}>
                        <Grid container direction='column' justifyContent='center' alignItems='center' className={styles.h100} >
                            <Typography variant='h6' component='p'>
                                EzeSneakers
                            </Typography>
                            <Box mb={3}>
                                <Typography variant='h4' component='h1' align='center'>
                                    Set New Password
                                </Typography>
                            </Box>
                            <ChangePasswordForm />
                        </Grid>
                    </Grid>
                    <Grid item xs={4} />
                </Grid>
            </>
        )
    } else {
        return <LoadingPage />
    }

}

export async function getServerSideProps(context) {
    return {
        props: {
            session: await getSession(context)
        },
    }
}