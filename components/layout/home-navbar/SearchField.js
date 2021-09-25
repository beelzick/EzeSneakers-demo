import useStyles from '../../../src/navbarMUIstyles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { styled, alpha } from '@mui/material/styles';

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
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function SearchField() {
    const [query, setQuery] = useState('')
    const classes = useStyles();
    const router = useRouter()

    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    const handlePress = (event) => {
        if (event.key === 'Enter') {
            router.push(`/search/${query}`)
            setQuery('')
        }

    }

    return <Search>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            value={query}
            onChange={handleChange}
            onKeyDown={handlePress}
        />
    </Search>
}