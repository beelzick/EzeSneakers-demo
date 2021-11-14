import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import styles from './RightSideMenu.module.css'
import { setSearchOpen, selectSearchOpen } from '../../../../redux/slices/searchDialogSlice';

export default function SearchIconButton() {
    const [searchIconDisabled, setSearchIconDisabled] = useState(false)
    const dispatch = useDispatch()
    const searchOpen = useSelector(selectSearchOpen)

    useEffect(() => {
        if (searchOpen) {
            setSearchIconDisabled(true)
        } else {
            setSearchIconDisabled(false)
        }
    }, [searchOpen])

    const handleSearchIconClick = () => {
        dispatch(setSearchOpen(true))
    }

    return (
        <IconButton onClick={handleSearchIconClick} disabled={searchIconDisabled}>
            <SearchIcon
                sx={{ fontSize: '27px', color: 'white' }}
                className={styles.mobileSearchIcon}
            />
        </IconButton>
    )

}