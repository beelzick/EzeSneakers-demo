import IconButton from '@mui/material/IconButton'
import NavBreadcrumbs from './NavBreadcrumbs';
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn';
import styles from './navbar.module.css'
import NextLink from 'next/link'

export default function SmallNav() {
    return <div className={styles['small-nav']}>
        <div>
            <NextLink href='https://github.com/beelzick/EzeSneakers-demo' passHref>
                <IconButton size='small' color='secondary'>
                    <GitHub fontSize='small' sx={{ fontSize: '20px' }} />
                </IconButton>
            </NextLink>
            <IconButton size='small' color='secondary'>
                <LinkedIn />
            </IconButton>
        </div>
        <div className='grow'></div>
        <NavBreadcrumbs />
    </div>
}