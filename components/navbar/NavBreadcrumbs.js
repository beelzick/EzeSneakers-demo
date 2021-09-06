import styles from './navbar.module.css'
import NextLink from 'next/link'
import { Link, Breadcrumbs } from '@material-ui/core'
export default function NavBreadcrumbs() {
    const handleLogout = async () => {
    }
    return <Breadcrumbs color='secondary' className={styles.links}>
        <NextLink color="inherit" href='/help' passHref>
            <Link color='secondary'>
                Help
            </Link>
        </NextLink>
        <NextLink color="inherit" href='/login' passHref>
            <Link color='secondary'>
                Log In
            </Link>
        </NextLink>
        <NextLink color="inherit" href='/register' passHref>
            <Link color='secondary'>
                Register
            </Link>
        </NextLink>
    </Breadcrumbs>
}