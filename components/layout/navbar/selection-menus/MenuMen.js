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
                    {['adidas', 'nike', 'reebok'].map((link, index) => (
                        <NextLink key={index} href={`/sneakers/men/${link}`} passHref>
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
                        collection
                    </Typography>
                    {['featured', 'new', 'most-rated'].map((link, index) => (
                        <NextLink key={index} href={`/sneakers/men/${link}`} passHref>
                            <Link underline='none' variant='button' className='link'>
                                {link === 'most-rated' ? link.replace(/-/g, ' ') : link}
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
                        <NextLink key={index} href={`/sneakers/men/${link}`} passHref>
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
                        <NextLink key={index} href={`/sneakers/men/${link}`} passHref>
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