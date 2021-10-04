import styles from './layout.module.css'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import NextLink from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    return <footer style={{ marginTop: '30px' }}>
        <Grid container sx={{ backgroundColor: 'black', padding: '32px 32px 8px 32px' }} >
            <Grid container direction='column'>
                <Grid
                    container
                    direction='row'
                    justifyContent='center'
                >
                    <Grid item xs={3} xl={1.5}>
                        <Grid container sx={{ justifyContent: { xs: 'center', xl: 'unset' } }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                                    Category
                                </Typography>
                                <NextLink href='/sneakers/men' passHref>
                                    <Link className='link' underline='none' variant='button' mb={0.3}>men</Link>
                                </NextLink>
                                <NextLink href='/sneakers/women' passHref>
                                    <Link className='link' underline='none' variant='button' mb={0.3}>women</Link>
                                </NextLink>
                                <NextLink href='/sneakers/new' passHref>
                                    <Link className='link' underline='none' variant='button' mb={0.3}>new </Link>
                                </NextLink>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} xl={1.5}>
                        <Grid container sx={{ justifyContent: { xs: 'center', xl: 'unset' } }} >
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                                    Main Pages
                                </Typography>
                                <NextLink href='/home' passHref>
                                    <Link className='link' underline='none' variant='button' mb={0.3}>home</Link>
                                </NextLink>
                                <NextLink href='/about' passHref>
                                    <Link className='link' underline='none' variant='button' mb={0.3}>about</Link>
                                </NextLink>
                                <NextLink href='/cart' passHref>
                                    <Link className='link' underline='none' variant='button' mb={0.3}>Your Cart</Link>
                                </NextLink>
                                <NextLink href='/register' passHref>
                                    <Link className='link' underline='none' variant='button' mb={0.3}>Register</Link>
                                </NextLink>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} xl={1.5}>
                        <Grid container sx={{ justifyContent: { xs: 'center', xl: 'unset' } }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                                    Brand
                                </Typography>
                                <NextLink href='/search/adidas' passHref>
                                    <Link className='link' underline='none' variant='button' mb={0.3}>adidas</Link>
                                </NextLink>
                                <NextLink href='/search/nike' passHref>
                                    <Link className='link' underline='none' variant='button' mb={0.3}>nike</Link>
                                </NextLink>
                                <NextLink href='/search/reebok' passHref>
                                    <Link className='link' underline='none' variant='button' mb={0.3}>reebok</Link>
                                </NextLink>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} xl={1.5}>
                        <Grid container sx={{ justifyContent: { xs: 'center', xl: 'unset' } }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                                    season
                                </Typography>
                                <NextLink href='/search/adidas' passHref>
                                    <Link className='link' underline='none' variant='button' mb={0.3}>autumn</Link>
                                </NextLink>
                                <NextLink href='/search/nike' passHref>
                                    <Link className='link' underline='none' variant='button' mb={0.3}>winter</Link>
                                </NextLink>
                                <NextLink href='/search/reebok' passHref>
                                    <Link className='link' underline='none' variant='button' mb={0.3}>spring</Link>
                                </NextLink>
                                <NextLink href='/search/reebok' passHref>
                                    <Link className='link' underline='none' variant='button' mb={0.3}>summer</Link>
                                </NextLink>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={11} sm={8} md={8} xl={3} sx={{ marginTop: { xs: '30px', xl: 'none' } }}>
                        <Grid container direction='row' spacing={3} sx={{ justifyContent: { xs: 'center', xl: 'unset' } }}>
                            <Grid item>
                                <Link className='link' underline='none' sx={{ cursor: 'pointer' }}>
                                    <Box sx={{ display: 'flex' }} mb={2}>
                                        <FacebookIcon />
                                        <Typography sx={{ display: 'inline-block' }} mt={0.15} ml={0.5} >Facebook</Typography>
                                    </Box>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link className='link' underline='none' sx={{ cursor: 'pointer' }}>
                                    <Box sx={{ display: 'flex' }} mb={2}>
                                        <TwitterIcon />
                                        <Typography sx={{ display: 'inline-block' }} mt={0.15} ml={0.5}>Twitter</Typography>
                                    </Box>
                                </Link>
                            </Grid>
                            <Grid item>
                                <NextLink href='https://github.com/beelzick/EzeSneakers-demo' passHref>
                                    <Link className='link' underline='none' sx={{ cursor: 'pointer' }}>
                                        <Box sx={{ display: 'flex' }} mb={2}>
                                            <GitHubIcon />
                                            <Typography sx={{ display: 'inline-block' }} mt={0.15} ml={0.5}>Git Hub</Typography>
                                        </Box>
                                    </Link>
                                </NextLink>
                            </Grid>
                            <Grid item>
                                <Link className='link' underline='none' sx={{ cursor: 'pointer' }}>
                                    <Box sx={{ display: 'flex' }} mb={2}>
                                        <InstagramIcon />
                                        <Typography sx={{ display: 'inline-block' }} mt={0.15} ml={0.5} >Instagram</Typography>
                                    </Box>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link className='link' underline='none' sx={{ cursor: 'pointer' }}>
                                    <Box sx={{ display: 'flex' }} mb={2}>
                                        <LinkedInIcon />
                                        <Typography sx={{ display: 'inline-block' }} mt={0.15} ml={0.5}>
                                            Linkedin
                                        </Typography>
                                    </Box>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link color='#7e7e7e' underline='none'>
                                    <Box sx={{ display: 'flex' }} mb={2}>
                                        <EmailIcon />
                                        <Typography sx={{ display: 'inline-block' }} mt={0.15} ml={0.5}>
                                            contact@ezes.com
                                        </Typography>
                                    </Box>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent='center' pt={1}>
                    <Grid item xs={12} md={4} order={{ xs: 2, md: 1 }}
                        sx={{ marginTop: { xs: '10px', sm: 'none' } }}>
                        <Typography
                            color='#7e7e7e'
                            variant='caption'
                            component='p'
                            sx={{ textAlign: { xs: 'center', md: 'unset' } }}
                        >
                            &copy; EzeSneakers {new Date().getFullYear()} | Save our planet by buying restored shoes
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }} >
                        <Grid container spacing={4} sx={{ justifyContent: { xs: 'center', md: 'flex-end' } }}>
                            <Grid item>
                                <Link variant='caption' underline='none' sx={{ cursor: 'pointer' }} className='link'>Privacy Policy</Link>
                            </Grid>
                            <Grid item>
                                <Link variant='caption' underline='none' sx={{ cursor: 'pointer' }} className='link'>Terms of use</Link>
                            </Grid>
                            <Grid item>
                                <Link variant='caption' underline='none' sx={{ cursor: 'pointer' }} className='link'>Cookie</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    </footer>
}