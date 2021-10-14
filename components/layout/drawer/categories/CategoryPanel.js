import styles from '../drawer.module.css'
import { useDispatch, useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Link from '@mui/material/Link'
import NextLink from 'next/link'
import { useEffect, useState } from 'react';
import { setDrawerState } from '../../../../redux/slices/drawerSlice';
import { v4 as uuidv4 } from 'uuid';

export default function CategoryPanel({
    selectCategoryClass,
    backTo,
    setCategoryClass,
    categoryName,
    setPanelClass,
    linkFilters,
    linkGroup,
}) {
    const categoryClass = useSelector(selectCategoryClass)

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
        dispatch(setDrawerState(false))
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
            mb={3}
        >
            <KeyboardArrowLeftIcon fontSize='large' />
            <Typography
                align='left'
                component='span'
                variant='h5'
                ml={1}
                sx={{ fontWeight: 500 }}
            >
                {backTo}
            </Typography>
        </Grid>
        <Typography
            align='left'
            component='span'
            variant='h5'
            my={1}
            sx={{ fontWeight: 500 }}
        >
            {categoryName[0].toUpperCase() + categoryName.slice(1)}
        </Typography>
        {linkFilters.map((filter) =>
        (<NextLink key={uuidv4()} href={`/sneakers/${linkGroup}/${filter}`} passHref>
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