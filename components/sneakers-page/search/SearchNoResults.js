import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { makeStyles, alpha } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    search: {
        width: '100%',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        maxWidth: 400,
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
        maxWidth: 400
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        maxWidth: 400,
        color: 'white',
    },
    container: {
        backgroundColor: 'black',
        maxWidth: 400,
        width: '100%',
        borderRadius: theme.shape.borderRadius,
    }
}));


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
        }

    }

    return <div className={classes.container}>
        <div className={classes.search}>
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
    </div>
}