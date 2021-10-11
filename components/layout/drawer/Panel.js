import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import styles from './drawer.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setMainClass } from '../../../redux/slices/drawerClassSlice'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { v4 as uuidv4 } from 'uuid';
export default function Panel({ setPanelClass, selectPanelClass, setPanelCategoryClass, categories, title }) {


    const panelClass = useSelector(selectPanelClass)
    const dispatch = useDispatch()

    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    const handleAllClick = () => {
        dispatch(setMainClass('mid'))
        dispatch(setPanelClass('right'))
    }

    const handleCategoryClick = (category) => () => {
        dispatch(setPanelCategoryClass({ [category]: 'mid' }))
        dispatch(setPanelClass('left'))
    }

    return <Grid
        onClick={stopPropagation}
        container
        className={
            (panelClass === 'mid' && styles['mid'])
            ||
            (panelClass === 'right' && styles['hide-right'])
            ||
            (panelClass === 'left' && styles['hide-left'])
        }
        sx={{ minWidth: '300px', position: 'absolute', maxWidth: '300px', height: '100%' }}
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
                sx={{ fontWeight: 500 }}>
                All
            </Typography>
        </Grid>
        <Typography
            align='left'
            component='span'
            variant='h5'
            my={1}
            sx={{ fontWeight: 500 }}
        >
            {title}
        </Typography>
        {categories.map(category => (
            <Grid
                key={uuidv4()}
                container
                direction='row'
                alignItems='center'
                onClick={handleCategoryClick(category)}
                sx={{ cursor: 'pointer' }}
            >
                <Typography variant='h6' component='span'>
                    {category[0].toUpperCase() + category.slice(1)}
                </Typography>
                <div className='grow' />
                <KeyboardArrowRightIcon />
            </Grid>
        ))}
    </Grid>
}