import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import styles from './drawer.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectWomenClass, setMainClass, setWomenClass } from '../../../../redux/slices/drawerClassSlice'
import { setWomenCategoryClass } from '../../../../redux/slices/drawerCategoryClassSlice'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function PanelWomen() {
    const womenClass = useSelector(selectWomenClass)
    const dispatch = useDispatch()

    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    const handleAllClick = () => {
        dispatch(setMainClass('mid'))
        dispatch(setWomenClass('right'))
    }

    const handleCategoryClick = (category) => () => {
        dispatch(setWomenCategoryClass({ [category]: 'mid' }))
        dispatch(setWomenClass('left'))
    }

    return <Grid
        onClick={stopPropagation}
        container
        className={
            (womenClass === 'mid' && styles['mid'])
            ||
            (womenClass === 'right' && styles['hide-right'])
            ||
            (womenClass === 'left' && styles['hide-left'])
        }
        sx={{ minWidth: '300px', position: 'absolute', maxWidth: '300px', height: '100%' }}
        direction='column'
        p={4}
    >
        <Grid
            onClick={stopPropagation}
            container
            direction='row'
            alignItems='center'
            onClick={handleAllClick}
            sx={{ cursor: 'pointer' }}
            mb={3}>
            <KeyboardArrowLeftIcon fontSize='large' />
            <Typography
                align='left'
                component='span'
                variant='h5'
                ml={1}
                sx={{ fontWeight: 500 }}>
                All
            </Typography>
        </Grid>
        <Grid
            container
            direction='row'
            alignItems='center'
            onClick={handleCategoryClick('brand')}
            sx={{ cursor: 'pointer' }}
        >
            <Typography variant='h6' component='span'>Brand</Typography>
            <div className='grow' />
            <KeyboardArrowRightIcon />
        </Grid>
        <Grid
            container
            direction='row'
            alignItems='center'
            onClick={handleCategoryClick('collection')}
            sx={{ cursor: 'pointer' }}
        >
            <Typography variant='h6' component='span'>Collection</Typography>
            <div className='grow' />
            <KeyboardArrowRightIcon />
        </Grid>
        <Grid
            container
            direction='row'
            alignItems='center'
            onClick={handleCategoryClick('season')}
            sx={{ cursor: 'pointer' }}
        >
            <Typography variant='h6' component='span'>Season</Typography>
            <div className='grow' />
            <KeyboardArrowRightIcon />
        </Grid>
        <Grid
            container
            direction='row'
            alignItems='center'
            onClick={handleCategoryClick('for')}
            sx={{ cursor: 'pointer' }}
        >
            <Typography variant='h6' component='span'>For</Typography>
            <div className='grow' />
            <KeyboardArrowRightIcon />
        </Grid>
    </Grid>
}