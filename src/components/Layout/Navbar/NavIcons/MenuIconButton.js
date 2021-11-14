import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import styles from './NavIcons.module.css'
import { useDispatch } from 'react-redux';
import { setDrawerState } from '../../../../redux/slices/drawerSlice';

export default function MenuIconButton() {
    const dispatch = useDispatch()
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        dispatch(setDrawerState(open))
    }

    return (
        <IconButton
            edge='start'
            className={styles.menuButton}
            color='inherit'
            aria-label='open drawer'
            onClick={toggleDrawer(true)}
            size='large'>
            <MenuIcon />
        </IconButton>
    )
}