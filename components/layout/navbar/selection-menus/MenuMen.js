import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { useDispatch } from 'react-redux'
import styles from '../navbar.module.css'
import { setMenuMen } from '../../../../redux/slices/selectionMenusSlice'

export default function MenuMen() {
    const dispatch = useDispatch()
    return <Grid
        container
        justifyContent='center'
        alingItems='center'
        p={3}
        className={styles['nav-dialog']}
        onMouseEnter={() => dispatch(setMenuMen(true))}
        onMouseLeave={() => dispatch(setMenuMen(false))}
    >
        <Grid container item xs={7} justifyContent='center' className={styles['fade-content']}>
            <Grid container justifyContent='center' item xs={2}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                        brand
                    </Typography>
                    <Link underline='none' variant='button' className='link'>
                        adidas
                    </Link>
                    <Link underline='none' variant='button' className='link'>
                        nike
                    </Link>
                    <Link underline='none' variant='button' className='link'>
                        reebok
                    </Link>
                </Box>
            </Grid>
            <Grid container justifyContent='center' item xs={2}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                        collection
                    </Typography>
                    <Link underline='none' variant='button' className='link'>
                        featured
                    </Link>
                    <Link underline='none' variant='button' className='link'>
                        new
                    </Link>
                    <Link underline='none' variant='button' className='link'>
                        summer
                    </Link>
                    <Link underline='none' variant='button' className='link'>
                        most rated
                    </Link>
                </Box>
            </Grid>
            <Grid container justifyContent='center' item xs={2}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                        season
                    </Typography>
                    <Link underline='none' variant='button' className='link'>
                        spring
                    </Link>
                    <Link underline='none' variant='button' className='link'>
                        summer
                    </Link>
                    <Link underline='none' variant='button' className='link'>
                        autumn
                    </Link>
                    <Link underline='none' variant='button' className='link'>
                        winter
                    </Link>
                </Box>
            </Grid>
            <Grid container justifyContent='center' item xs={2}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                        for
                    </Typography>
                    <Link underline='none' variant='button' className='link'>
                        training
                    </Link>
                    <Link underline='none' variant='button' className='link'>
                        outdoor
                    </Link>
                    <Link underline='none' variant='button' className='link'>
                        street
                    </Link>
                </Box>
            </Grid>
        </Grid>
    </Grid>
}