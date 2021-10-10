import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import styles from './drawer.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectSeasonClass, setMainClass, setSeasonClass } from '../../../../redux/slices/drawerClassSlice'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function PanelSeason() {
    const seasonClass = useSelector(selectSeasonClass)
    const dispatch = useDispatch()
    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    const handleAllClick = () => {
        dispatch(setMainClass('mid'))
        dispatch(setSeasonClass('right'))
    }

    return <Grid
        onClick={stopPropagation}
        container
        className={
            (seasonClass === 'mid' && styles['mid'])
            ||
            (seasonClass === 'right' && styles['hide-right'])
            ||
            (seasonClass === 'left' && styles['hide-left'])
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
                All
            </Typography>
        </Grid>
        <Grid container direction='row' alignItems='center'>
            <Typography variant='h6' component='span'>Women</Typography>
            <div className='grow' />
            <KeyboardArrowRightIcon />
        </Grid>
        <Grid container direction='row' alignItems='center'>
            <Typography variant='h6' component='span'>Men</Typography>
            <div className='grow' />
            <KeyboardArrowRightIcon />
        </Grid>
    </Grid>
}