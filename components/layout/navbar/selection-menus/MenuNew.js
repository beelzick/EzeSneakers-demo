import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { useDispatch } from 'react-redux'
import styles from '../navbar.module.css'
import { setMenuNew } from '../../../../redux/slices/selectionMenusSlice'
import NextLink from 'next/link'

export default function MenuNew() {
    const dispatch = useDispatch()
    return <Grid
        container
        justifyContent='center'
        alignItems='center'
        p={3}
        className={styles['nav-dialog']}
        onMouseEnter={() => dispatch(setMenuNew(true))}
        onMouseLeave={() => dispatch(setMenuNew(false))}
    >
        <Grid container item xs={7} justifyContent='center' className={styles['fade-content']}>
            <Grid container justifyContent='center' item xs={2}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }} >
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
                        season
                    </Typography>
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
                        Gender
                    </Typography>
                    <NextLink href='/sneakers/men/new' passHref>
                        <Link underline='none' variant='button' className='link'>
                            men
                        </Link>
                    </NextLink>
                    <NextLink href='/sneakers/women/new' passHref>
                        <Link underline='none' variant='button' className='link'>
                            women
                        </Link>
                    </NextLink>
                </Box>
            </Grid>
        </Grid>
    </Grid>
}