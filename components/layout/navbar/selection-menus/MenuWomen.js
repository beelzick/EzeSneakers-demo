import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { useDispatch } from 'react-redux'
import styles from '../navbar.module.css'
import { setMenuWomen } from '../../../../redux/slices/selectionMenusSlice'
import NextLink from 'next/link'

export default function MenuWomen() {
    const dispatch = useDispatch()
    return <Grid
        container
        justifyContent='center'
        alignItems='center'
        p={3}
        className={styles['nav-dialog']}
        onMouseEnter={() => dispatch(setMenuWomen(true))}
        onMouseLeave={() => dispatch(setMenuWomen(false))}
    >
        <Grid container item xs={7} justifyContent='center' className={styles['fade-content']}>
            <Grid container justifyContent='center' item xs={2}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                    <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                        brand
                    </Typography>
                    {['adidas', 'nike', 'reebok'].map((link, index) => (
                        <NextLink key={index} href={`/sneakers/women/${link}`} passHref>
                            <Link underline='none' variant='button' className='link'>
                                {link}
                            </Link>
                        </NextLink>
                    ))}
                </Box>
            </Grid>
            <Grid container justifyContent='center' item xs={2}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                    <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                        collection
                    </Typography>
                    {['featured', 'new', 'most-rated', 'women-love'].map((link, index) => (
                        <NextLink key={index} href={`/sneakers/women/${link}`} passHref>
                            <Link underline='none' variant='button' className='link'>
                                {(link === 'most-rated' || link === 'women-love') ? link.replace(/-/g, ' ') : link}
                            </Link>
                        </NextLink>
                    ))}
                </Box>
            </Grid>
            <Grid container justifyContent='center' item xs={2}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                        season
                    </Typography>
                    {['spring', 'summer', 'autumn', 'winter'].map((link, index) => (
                        <NextLink key={index} href={`/sneakers/women/${link}`} passHref>
                            <Link underline='none' variant='button' className='link'>
                                {link}
                            </Link>
                        </NextLink>
                    ))}
                </Box>
            </Grid>
            <Grid container justifyContent='center' item xs={2}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                        for
                    </Typography>
                    {['training', 'outdoor', 'street'].map((link, index) => (
                        <NextLink key={index} href={`/sneakers/women/${link}`} passHref>
                            <Link underline='none' variant='button' className='link'>
                                {link}
                            </Link>
                        </NextLink>
                    ))}
                </Box>
            </Grid>
        </Grid>
    </Grid>
}