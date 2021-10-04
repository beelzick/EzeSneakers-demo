import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { useDispatch } from 'react-redux'
import styles from '../navbar.module.css'
import { setMenuSeason } from '../../../../redux/slices/selectionMenusSlice'

export default function MenuSeason() {
    const dispatch = useDispatch()
    return <Grid
        container
        justifyContent='center'
        alingItems='center'
        p={3}
        className={styles['nav-dialog']}
        onMouseEnter={() => dispatch(setMenuSeason(true))}
        onMouseLeave={() => dispatch(setMenuSeason(false))}
    >
        <Grid container item xs={7} justifyContent='center' className={styles['fade-content']}>
            <Grid container justifyContent='center' item xs={2}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                        men
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
                        women
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
        </Grid>
    </Grid>
}