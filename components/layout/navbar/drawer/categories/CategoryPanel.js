import styles from '../drawer.module.css'
import { useDispatch } from 'react-redux'

export default function CategoryPanel({ categoryClass, backTo, setCategoryClass, categoryName, setPanelClass }) {
    const dispatch = useDispatch()

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

    </Grid>
}