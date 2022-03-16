import IconButton from '@mui/material/IconButton'
import NavBreadcrumbs from './NavBreadcrumbs';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './SmallNav.module.css'

export default function SmallNav() {
    return (
        <div className={styles.container}>
            <div>
                <IconButton size='small' color='secondary' aria-label='GitHub' href='#facebok'>
                    <FacebookIcon />
                </IconButton>
                <IconButton size='small' color='secondary' aria-label='Linkedin' href='#instagram'>
                    <InstagramIcon />
                </IconButton>
            </div>
            <div className='grow' />
            <NavBreadcrumbs />
        </div>
    )
}