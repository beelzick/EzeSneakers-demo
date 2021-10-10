import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import styles from '../drawer.module.css'
import { useSelector, useDispatch } from 'react-redux'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { setWomenCategoryClass, selectWomenCategoryClass } from '../../../../../redux/slices/drawerCategoryClassSlice'
import { setWomenClass } from '../../../../../redux/slices/drawerClassSlice';

export default function WomenBrand() {
    const womenBrandClass = useSelector(selectWomenCategoryClass)
    const dispatch = useDispatch()
    
    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    const handleAllClick = () => {
        dispatch(setWomenClass('mid'))
        dispatch(setWomenCategoryClass({ brand: 'right' }))
    }

    return <Grid
        onClick={stopPropagation}
        container
        className={styles['hide-right']}
        className={
            (womenBrandClass.brand === 'right' && styles['hide-right'])
            ||
            (womenBrandClass.brand === 'mid' && styles['mid'])
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
                Women
            </Typography>
        </Grid>

    </Grid>
}