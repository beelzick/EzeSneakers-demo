import IconButton from '@mui/material/IconButton'
import NavBreadcrumbs from './NavBreadcrumbs';
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn';
import styles from './SmallNav.module.css'

export default function SmallNav() {
    return (
        <div className={styles.container}>
            <div>
                <IconButton size='small' color='secondary' aria-label='GitHub' href='https://github.com/beelzick/eze-sneakers'>
                    <GitHub fontSize='small' />
                </IconButton>
                <IconButton size='small' color='secondary' aria-label='Linkedin' href='https://www.linkedin.com/in/kacper-zabielski-329911217/'>
                    <LinkedIn />
                </IconButton>
            </div>
            <div className='grow' />
            <NavBreadcrumbs />
        </div>
    )
}