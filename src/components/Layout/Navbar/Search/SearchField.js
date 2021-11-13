import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import styles from './Search.module.css'
import SearchDialog from './SearchDialog';
import { setSearchOpen } from '../../../../redux/slices/searchDialogSlice';
import { useDispatch } from 'react-redux';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    crusor: 'pointer',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        cursor: 'pointer',
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '130px',
        },
    },
    '& .Mui-disabled': {
        WebkitTextFillColor: '#f7f7f7 !important'
    }
}));

export default function SearchField() {
    const dispatch = useDispatch()


    const handleOpenClick = () => {
        dispatch(setSearchOpen(true))
    }

    return <>
        <Search className={styles.search} onClick={handleOpenClick}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                disabled
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
        <SearchDialog />
    </>
}