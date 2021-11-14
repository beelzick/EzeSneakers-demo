import AppBar from '@mui/material/AppBar';
import styles from './NavbarContainer.module.css'
import SmallNav from '../SmallNav/SmallNav';
export default function NavbarContainer({ children }) {
    return (
        <AppBar position='static'>
            <SmallNav />
            <div className={styles.toolbar}>
                {children}
            </div>
        </AppBar>
    )
}