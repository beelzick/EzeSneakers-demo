import styles from '../drawer.module.css'
import { useDispatch, useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Link from '@mui/material/Link'
import NextLink from 'next/link'
import { useState } from 'react';
import { selectNewCategoryClass, setNewCategoryClass } from '../../../../redux/slices/drawerCategoryClassSlice';
import { setNewClass } from '../../../../redux/slices/drawerClassSlice';
import { setDrawerState } from '../../../../redux/slices/drawerSlice';

export default function GenderNewCategoryPanel() {
    const newCategoryClass = useSelector(selectNewCategoryClass)
    const dispatch = useDispatch()

    const [colors, setColors] = useState({
        women: false,
        men: false
    })

    const handleClick = (name) => () => {
        setColors(prevValue => {
            return {
                ...prevValue,
                [name]: !prevValue[name]
            }
        })
        dispatch(setDrawerState(false))
    }

    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    const handleAllClick = () => {
        dispatch(setNewClass('mid'))
        dispatch(setNewCategoryClass({ gender: 'right' }))

    }

    return <Grid
        onClick={stopPropagation}
        container
        className={
            (newCategoryClass.gender === 'right' && styles['hide-right'])
            ||
            (newCategoryClass.gender === 'mid' && styles['mid'])
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
                New
            </Typography>
        </Grid>
        <Typography
            align='left'
            component='span'
            variant='h5'
            my={1}
            sx={{ fontWeight: 500 }}
        >
            Gender
        </Typography>
        <NextLink href='/sneakers/women/new' passHref>
            <Link
                onClick={handleClick('women')}
                sx={{ cursor: 'pointer' }}
                variant='button'
                underline='none'
                fontSize='20px'
                color={colors.women ? 'black' : '#7e7e7e'}
            >
                Women
            </Link>
        </NextLink>
        <NextLink href='/sneakers/men/new' passHref>
            <Link
                onClick={handleClick('men')}
                sx={{ cursor: 'pointer' }}
                variant='button'
                underline='none'
                fontSize='20px'
                color={colors.men ? 'black' : '#7e7e7e'}
            >
                Men
            </Link>
        </NextLink>
    </Grid>
}