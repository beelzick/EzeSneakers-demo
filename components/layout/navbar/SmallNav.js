import IconButton from '@mui/material/IconButton'
import NavBreadcrumbs from './NavBreadcrumbs';
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn';
import styles from './navbar.module.css'
import NextLink from 'next/link'

export default function SmallNav() {
    return <div className={styles['small-nav']}>
        <div>
            <NextLink href='https://github.com/beelzick/eze-sneakers' passHref>
                <IconButton size='small' color='secondary' aria-label='GitHub'>
                    <GitHub fontSize='small' sx={{ fontSize: '20px' }} />
                </IconButton>
            </NextLink>
            <NextLink href='https://www.linkedin.com/in/kacper-zabielski-329911217/' passHref>
                <IconButton size='small' color='secondary' aria-label='Linkedin'>
                    <LinkedIn />
                </IconButton>
            </NextLink>
        </div>
        <div className='grow' />
        <NavBreadcrumbs />
    </div>
}