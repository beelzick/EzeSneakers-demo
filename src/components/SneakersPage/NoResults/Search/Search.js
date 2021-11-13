import SearchIcon from '@mui/icons-material/Search';
import styles from './Search.module.css'
import SearchInput from './SearchInput';
import SearchContainer from './SearchContainer';

export default function Search() {
    return (
        <SearchContainer>
            <div className={styles.searchIcon}>
                <SearchIcon />
            </div>
            <SearchInput />
        </SearchContainer>
    )
}