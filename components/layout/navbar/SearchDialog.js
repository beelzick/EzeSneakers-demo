import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchOpen, setSearchOpen } from '../../../redux/slices/searchDialogSlice';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#262626',
    '&:hover': {
        backgroundColor: '#404040',
    },
    width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiSvgIcon-root': {
        color: 'white'
    }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        WebkitTextFillColor: '#f7f7f7 !important',
        color: 'white'
    },
}));

export default function SearchDialog() {
    const dispatch = useDispatch()
    const [query, setQuery] = useState('')
    const searchOpen = useSelector(selectSearchOpen)
    const router = useRouter()

    const inputRef = useRef(null)

    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    const handlePress = (event) => {
        if (event.key === 'Enter') {
            router.push(`/search/${query}`)
            setQuery('')
            setTimeout(() => {
                dispatch(setSearchOpen(false))
            }, 1)
        }
    }

    useEffect(() => {
        if (searchOpen) {
            inputRef.current.focus()
        }
    }, [searchOpen])

    return <Search>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
            placeholder='Search…'
            inputProps={{ 'aria-label': 'search' }}
            inputRef={inputRef}
            value={query}
            onChange={handleChange}
            onKeyDown={handlePress}
        />
    </Search>
}



