import useStyles from '../../src/navbarMUIstyles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useState } from 'react';
import { useRouter } from 'next/router'

export default function Search() {
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

    return <div className={classes.search}>
        <div className={classes.searchIcon}>
            <SearchIcon />
        </div>
        <InputBase
            placeholder="Search…"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            value={query}
            onChange={handleChange}
            onKeyDown={handlePress}
        />
    </div>
}