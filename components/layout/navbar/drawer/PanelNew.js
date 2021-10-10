import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import styles from './drawer.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectNewClass, setMainClass, setNewClass } from '../../../../redux/slices/drawerClassSlice'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function PanelNew() {
    const newClass = useSelector(selectNewClass)
    const dispatch = useDispatch()

    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    const handleAllClick = () => {
        dispatch(setMainClass('mid'))
        dispatch(setNewClass('right'))
    }

    return <Grid
        onClick={stopPropagation}
        container
        className={
            (newClass === 'mid' && styles['mid'])
            ||
            (newClass === 'right' && styles['hide-right'])
            ||
            (newClass === 'left' && styles['hide-left'])
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
            <Typography variant='h6' component='span'>Brand</Typography>
            <div className='grow' />
            <KeyboardArrowRightIcon />
        </Grid>
        <Grid container direction='row' alignItems='center'>
            <Typography variant='h6' component='span'>Season</Typography>
            <div className='grow' />
            <KeyboardArrowRightIcon />
        </Grid>
        <Grid container direction='row' alignItems='center'>
            <Typography variant='h6' component='span'>Gender</Typography>
            <div className='grow' />
            <KeyboardArrowRightIcon />
        </Grid>
    </Grid>
}