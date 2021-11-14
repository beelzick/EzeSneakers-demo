import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchOpen, setSearchOpen } from '../../../../../../redux/slices/searchDialogSlice';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid'
import styles from './SearchDialogField.module.css'
import StyledInputBase from '../../../../../StyledComponents/StyledInputBase';

export default function SearchDialogField() {
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
            dispatch(setSearchOpen(false))
        }
    }

    useEffect(() => {
        if (searchOpen) {
            inputRef.current.focus()
        }
    }, [searchOpen])

    return (
        <Grid
            item
            xs={12}
            sm={8}
            md={7}
            lg={6}
            xl={4}
            container
            alignItems='flex-start'
        >

            <div className={styles.search}>
                <div className={styles.iconContainer}>
                    <SearchIcon sx={{ color: 'white' }} />
                </div>
                <StyledInputBase
                    placeholder='Search…'
                    inputProps={{ 'aria-label': 'search' }}
                    inputRef={inputRef}
                    value={query}
                    onChange={handleChange}
                    onKeyDown={handlePress}
                />
            </div>
        </Grid>
    )
}



