import IconButton from '@mui/material/IconButton'
import NavBreadcrumbs from './NavBreadcrumbs';
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn';
import styles from './navbar.module.css'

export default function SmallNav() {
    return <div className={styles.smBar}>
        <div>
            <IconButton size='small' color='secondary'>
                <GitHub fontSize='small' />
            </IconButton>
            <IconButton size='small' color='secondary'>
                <LinkedIn />
            </IconButton>
        </div>
        <div className='grow'></div>
        <div>
            <NavBreadcrumbs />
        </div>
    </div>
}