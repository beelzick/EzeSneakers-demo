import styles from './SearchField.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { setSearchOpen } from '../../../../../redux/slices/searchDialogSlice';
import { useDispatch } from 'react-redux';

export default function SearchField() {
    const dispatch = useDispatch()

    const handleOpenClick = () => {
        dispatch(setSearchOpen(true))
    }

    return (
        <div className={styles.search} onClick={handleOpenClick} data-testid='search-input'>
            <div className={styles.iconContainer}>
                <SearchIcon />
            </div>
            <div className={styles.input}>
                Search...
            </div>
        </div>
    )
}