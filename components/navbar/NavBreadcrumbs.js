import styles from './navbar.module.css'
import NextLink from 'next/link'
import { Link, Breadcrumbs } from '@material-ui/core'
import { signOut, useSession } from 'next-auth/react'

export default function NavBreadcrumbs() {
    const { data: session, status } = useSession()

    if (status === 'loading') {
        return null
    }

    return <Breadcrumbs color='secondary' className={styles.links}>
        <NextLink color="inherit" href='/' passHref>
            <Link color='secondary'>
                Home
            </Link>
        </NextLink>

        {status === 'unauthenticated' && (
            <NextLink color="inherit" href='/login' passHref>
                <Link color='secondary'>
                    Log In
                </Link>
            </NextLink>)}

        {status === 'unauthenticated' && (
            <NextLink color="inherit" href='/register' passHref>
                <Link color='secondary'>
                    Register
                </Link>
            </NextLink>)}
        {status === 'authenticated' && (
            <Link onClick={() => signOut()} color='secondary' className={styles.logout}>
                Log out
            </Link>
        )}
    </Breadcrumbs>
}