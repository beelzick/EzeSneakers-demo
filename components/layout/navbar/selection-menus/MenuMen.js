import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { useDispatch } from 'react-redux'
import styles from '../navbar.module.css'
import { setMenuMen } from '../../../../redux/slices/selectionMenusSlice'
import NextLink from 'next/link'

export default function MenuMen() {
    const dispatch = useDispatch()
    return <Grid
        container
        justifyContent='center'
        alignItems='center'
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
                    <NextLink href='/sneakers/men/adidas' passHref >
                        <Link underline='none' variant='button' className='link'>
                            adidas
                        </Link>
                    </NextLink>
                    <NextLink href='/sneakers/men/nike' passHref >
                        <Link underline='none' variant='button' className='link'>
                            nike
                        </Link>
                    </NextLink>
                    <NextLink href='/sneakers/men/reebok' passHref >
                        <Link underline='none' variant='button' className='link'>
                            reebok
                        </Link>
                    </NextLink>
                </Box>
            </Grid>
            <Grid container justifyContent='center' item xs={2}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                        collection
                    </Typography>
                    <NextLink href='/sneakers/men/featured' passHref>
                        <Link underline='none' variant='button' className='link'>
                            featured
                        </Link>
                    </NextLink>
                    <NextLink href='/sneakers/men/new' passHref>
                        <Link underline='none' variant='button' className='link'>
                            new
                        </Link>
                    </NextLink>
                    <NextLink href='/sneakers/men/most-rated' passHref>
                        <Link underline='none' variant='button' className='link'>
                            most rated
                        </Link>
                    </NextLink>
                </Box>
            </Grid>
            <Grid container justifyContent='center' item xs={2}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                        season
                    </Typography>
                    <NextLink href='/sneakers/men/spring' passHref>
                        <Link underline='none' variant='button' className='link'>
                            spring
                        </Link>
                    </NextLink>
                    <NextLink href='/sneakers/men/summer' passHref>
                        <Link underline='none' variant='button' className='link'>
                            summer
                        </Link>
                    </NextLink>
                    <NextLink href='/sneakers/men/autumn' passHref>
                        <Link underline='none' variant='button' className='link'>
                            autumn
                        </Link>
                    </NextLink>
                    <NextLink href='/sneakers/men/winter' passHref>
                        <Link underline='none' variant='button' className='link'>
                            winter
                        </Link>
                    </NextLink>
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