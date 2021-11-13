import InputBase from '@mui/material/InputBase';
import { useState } from 'react';
import { useRouter } from 'next/router'
import makeStyles from '@mui/styles/makeStyles';

export default function SearchInput() {
    const [query, setQuery] = useState('')
    const router = useRouter()
    const classes = useStyles();
    
    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    const handlePress = (event) => {
        if (event.key === 'Enter') {
            router.push(`/search/${query}`)
        }

    }
    return (
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
    )
}

const useStyles = makeStyles((theme) => ({
    inputRoot: {
        color: 'inherit',
        width: '100%',
        maxWidth: 400
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        maxWidth: 400,
        color: 'white',
    },
}))