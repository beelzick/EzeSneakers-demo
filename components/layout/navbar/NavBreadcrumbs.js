import styles from './navbar.module.css'
import NextLink from 'next/link'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Link, Breadcrumbs } from '@mui/material'
import { signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import LogInForm from '../../forms/LoginForm';
import { selectOpen, dialogOpen, dialogClose } from '../../../redux/slices/loginDialogSlice'
import { useSelector, useDispatch } from 'react-redux';
import { loadingStart, loadingStop } from '../../../redux/slices/loadingSlice'

export default function NavBreadcrumbs() {
    const dispatch = useDispatch()
    const { data: session, status } = useSession()
    const open = useSelector(selectOpen)

    useEffect(() => {
        if (status === 'authenticated') {
            dispatch(dialogClose())
        }
    }, [status])

    if (status === 'loading') {
        return null
    }

    const handleLogout = async () => {
        dispatch(loadingStart())
        await signOut()
        dispatch(loadingStop())
    }

    return <>
        <Breadcrumbs color='secondary' className={styles.links}>
            <NextLink color="inherit" href='/' passHref>
                <Link color='secondary' underline='hover'>
                    Home
                </Link>
            </NextLink>

            {!session && (
                <Link underline='hover' color='secondary' className={styles.pointer} onClick={() => dispatch(dialogOpen())}>
                    Log In
                </Link>)}

            {!session && (
                <NextLink color="inherit" href='/register' passHref>
                    <Link color='secondary' underline='hover' >
                        Register
                    </Link>
                </NextLink>)}

            {session && (
                <Link underline='hover' onClick={handleLogout} color='secondary' className={styles.pointer}>
                    Log out
                </Link>
            )}
        </Breadcrumbs>
        <div className={styles.dialog}>
            <Dialog
                open={open}
                onClose={() => dispatch(dialogClose())}
                aria-labelledby="form-dialog-title"
                maxWidth='sm'
                fullWidth={true}
            >
                <DialogContent >
                    <LogInForm />
                </DialogContent>
            </Dialog>
        </div>
    </>
}