import styles from './navbar.module.css'
import NextLink from 'next/link'
import { Link, Breadcrumbs } from '@material-ui/core'
import axios from 'axios'
export default function NavBreadcrumbs({ data }) {
    const handleLogout = async () => {
        await axios.get('/api/users/logout')
        window.location.replace('/')
    }
    return <Breadcrumbs color='secondary' className={styles.links}>
        <NextLink color="inherit" href='/help' passHref>
            <Link color='secondary'>
                help
            </Link>
        </NextLink>
        {!data.sucess && <NextLink color="inherit" href='/login' passHref>
            <Link color='secondary'>
                login
            </Link>
        </NextLink>}
        {!data.sucess && <NextLink color="inherit" href='/register' passHref>
            <Link color='secondary'>
                register
            </Link>
        </NextLink>}
        {data.sucess && <Link className={styles.logout} color='secondary' onClick={handleLogout}>
            logout
        </Link>}
    </Breadcrumbs>
}