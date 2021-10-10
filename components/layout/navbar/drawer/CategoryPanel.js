import styles from './drawer.module.css'
import { useDispatch } from 'react-redux'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Link from '@mui/material/Link'
import NextLink from 'next/link'
import { useEffect, useState } from 'react';

export default function CategoryPanel({ categoryClass, backTo, setCategoryClass, categoryName, setPanelClass, linkFilters, linkGroup }) {
    let linksState = {}
    useEffect(() => {
        linkFilters.map(filter => {
            linksState[filter] = false
        })
    }, [linkFilters])

    const [colors, setColor] = useState(linksState)
    const dispatch = useDispatch()

    const handleClick = (filter) => () => {
        setColor(prevValue => {
            return {
                ...prevValue,
                [filter]: !prevValue[filter]
            }
        })
    }

    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    const handleAllClick = () => {
        dispatch(setPanelClass('mid'))
        dispatch(setCategoryClass({ [categoryName]: 'right' }))
    }

    return <Grid
        onClick={stopPropagation}
        container
        className={styles['hide-right']}
        className={
            (categoryClass[categoryName] === 'right' && styles['hide-right'])
            ||
            (categoryClass[categoryName] === 'mid' && styles['mid'])
        }
        sx={{ minWidth: '300px', position: 'absolute', maxWidth: '300px' }}
        direction='column'
        p={4}
    >
        <Grid
            container
            direction='row'
            alignItems='center'
            onClick={handleAllClick}
            sx={{ cursor: 'pointer' }}
            mb={3}>
            <KeyboardArrowLeftIcon fontSize='large' />
            <Typography align='left' component='span' variant='h5' ml={1} sx={{ fontWeight: 500 }}>
                {backTo}
            </Typography>
        </Grid>

        {linkFilters.map((filter) =>
        (<NextLink href={`/sneakers/${linkGroup}/${filter}`} passHref>
            <Link
                onClick={handleClick(`${filter}`)}
                sx={{ cursor: 'pointer' }}
                variant='button'
                underline='none'
                fontSize='20px'
                color={colors[filter] ? 'black' : '#7e7e7e'}
            >
                {filter.replace(/-/g, ' ')}
            </Link>
        </NextLink>)
        )}
    </Grid>
}