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
        <Grid container item xs={7} className={styles['fade-content']}>
            <Grid container justifyContent='center' item xs={3} lg={2}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                    <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                        brand
                    </Typography>
                    {['adidas', 'nike', 'reebok'].map(link => (
                        <NextLink href={`/sneakers/new/${link}`} passHref>
                            <Link underline='none' variant='button' className='link'>
                                {link}
                            </Link>
                        </NextLink>
                    ))}
                </Box>
            </Grid>
            <Grid container justifyContent='center' item xs={3} lg={2}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                        season
                    </Typography>
                    {['autumn', 'winter'].map(link => (
                        <NextLink href={`/sneakers/new/${link}`} passHref>
                            <Link underline='none' variant='button' className='link'>
                                {link}
                            </Link>
                        </NextLink>
                    ))}
                </Box>
            </Grid>
            <Grid container justifyContent='center' item xs={3} lg={2}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                        Gender
                    </Typography>
                    {['women', 'men'].map(link => (
                        <NextLink href={`/sneakers/${link}/new`} passHref>
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