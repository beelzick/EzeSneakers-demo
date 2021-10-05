import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { useDispatch } from 'react-redux'
import styles from './navbar.module.css'
import NextLink from 'next/link'
import { setMenuMen, setMenuWomen, setMenuSeason, setMenuNew } from '../../../redux/slices/selectionMenusSlice'

export default function NavLink() {
    const dispatch = useDispatch()
    return (
        <>
            <Box className={styles['nav-links']}>
                <Box
                    px={2}
                    className={styles['link-container']}
                    sx={{ cursor: 'pointer' }}
                    onMouseEnter={() => dispatch(setMenuMen(true))}
                    onMouseLeave={() => dispatch(setMenuMen(false))}
                >   <NextLink href='/sneakers/men' passHref passHref>
                        <Link underline='none' variant='button' color='inherit'>
                            men
                        </Link>
                    </NextLink>
                </Box>
                <Box
                    px={2}
                    className={styles['link-container']}
                    sx={{ cursor: 'pointer' }}
                    onMouseEnter={() => dispatch(setMenuWomen(true))}
                    onMouseLeave={() => dispatch(setMenuWomen(false))}
                >   <NextLink href='/sneakers/women' passHref>
                        <Link underline='none' variant='button' color='inherit'>
                            women
                        </Link>
                    </NextLink>
                </Box>
                <Box
                    px={2}
                    className={styles['link-container']}
                    sx={{ cursor: 'pointer' }}
                    onMouseEnter={() => dispatch(setMenuNew(true))}
                    onMouseLeave={() => dispatch(setMenuNew(false))}
                >   <NextLink href='/sneakers/new' passHref>
                        <Link underline='none' variant='button' color='inherit'>
                            new
                        </Link>
                    </NextLink>
                </Box>
                <Box
                    px={2}
                    className={styles['link-container']}
                    sx={{ cursor: 'pointer' }}
                    onMouseEnter={() => dispatch(setMenuSeason(true))}
                    onMouseLeave={() => dispatch(setMenuSeason(false))}
                >   <NextLink href='/sneakers/season' passHref>
                        <Link underline='none' variant='button' color='inherit'>
                            season
                        </Link>
                    </NextLink>
                </Box>
            </Box>
        </>
    )
}