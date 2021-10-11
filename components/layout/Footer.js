import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import NextLink from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { v4 as uuidv4 } from 'uuid';

const iconsData = [
    {
        component: FacebookIcon,
        text: 'Facebook'
    },
    {
        component: TwitterIcon,
        text: 'Twitter'
    },
    {
        component: GitHubIcon,
        text: 'Git Hub',
        href: 'https://github.com/beelzick/EzeSneakers-demo'
    },
    {
        component: InstagramIcon,
        text: 'Instagram'
    },
    {
        component: LinkedInIcon,
        text: 'Linkedin'
    },
    {
        component: EmailIcon,
        text: 'Email'
    },
]

export default function Footer() {
    return <footer style={{ marginTop: '30px' }}>
        <Grid container sx={{ backgroundColor: 'black', padding: '32px 32px 8px 32px' }} >
            <Grid container direction='column'>
                <Grid
                    container
                    direction='row'
                    sx={{ justifyContent: { md: 'space-evenly' } }}
                >
                    <Grid item xs={4} lgf={1}>
                        <Grid container sx={{ justifyContent: { xs: 'unset', md: 'center', xl: 'unset' } }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                                    check out
                                </Typography>
                                {['men', 'women', 'new', 'season'].map(link => (
                                    <NextLink key={uuidv4()} href={`/sneakers/${link}`} passHref>
                                        <Link className='link' underline='none' variant='button' mb={0.3}>
                                            {link === 'season' ? 'autumn' : link}
                                        </Link>
                                    </NextLink>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} lgf={1}>
                        <Grid container sx={{ justifyContent: { xs: 'unset', md: 'center', xl: 'unset' } }} >
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                                    Main Pages
                                </Typography>
                                {['home', 'about', 'cart'].map(link => (
                                    <NextLink key={uuidv4()} href={`/${link}`} passHref>
                                        <Link className='link' underline='none' variant='button' mb={0.3}>
                                            {link === 'cart' ? 'your cart' : link}
                                        </Link>
                                    </NextLink>
                                ))}
                                <NextLink href='/register' passHref>
                                    <Link className='link' underline='none' variant='button' mb={0.3}>
                                        join us
                                    </Link>
                                </NextLink>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} lgf={1}>
                        <Grid container sx={{ justifyContent: { xs: 'unset', md: 'center', xl: 'unset' } }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                                    new
                                </Typography>
                                {['adidas', 'nike', 'reebok'].map((link, index) => (
                                    <NextLink key={uuidv4()} href={`/sneakers/new/${link}`} passHref >
                                        <Link className='link' underline='none' variant='button' mb={0.3}>
                                            {link}
                                        </Link>
                                    </NextLink>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} md={4} lgf={1} sx={{ marginTop: { xs: '20px', lgf: 'unset' } }}>
                        <Grid container sx={{ justifyContent: { xs: 'unset', md: 'center', xl: 'unset' } }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                                    women
                                </Typography>
                                {['featued', 'new', 'most-rated', 'women-love'].map(link => (
                                    <NextLink key={uuidv4()} href={`/sneakers/women/${link}`} passHref>
                                        <Link className='link' underline='none' variant='button' mb={0.3}>
                                            {link.replace(/-/g, ' ')}
                                        </Link>
                                    </NextLink>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} md={4} lgf={1} sx={{ marginTop: { xs: '20px', lgf: 'unset' } }}>
                        <Grid container sx={{ justifyContent: { xs: 'unset', md: 'center', xl: 'unset' } }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                                    men
                                </Typography>
                                {['featued', 'new', 'most-rated'].map(link => (
                                    <NextLink key={uuidv4()} href={`/sneakers/men/${link}`} passHref>
                                        <Link className='link' underline='none' variant='button' mb={0.3}>
                                            {link.replace(/-/g, ' ')}
                                        </Link>
                                    </NextLink>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4} lgf={3} sx={{ marginTop: { xs: '20px', lgf: 'unset' } }}>
                        <Grid container direction='row' spacing={3} sx={{ justifyContent: { xs: 'unset', md: 'center', xl: 'unset' } }}>
                            {iconsData.map(icon => (
                                <Grid item key={uuidv4()}>
                                    <Link className='link' href={icon.href ? icon.href : null} underline='none' sx={{ cursor: 'pointer' }}>
                                        <Box sx={{ display: 'flex' }} mb={2}>
                                            <icon.component />
                                            <Typography sx={{ display: 'inline-block' }} mt={0.15} ml={0.5} >{icon.text}</Typography>
                                        </Box>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent='center' mt={3}>
                    <Grid item xs={12} lgf={6} order={{ lgf: 2 }}>
                        <Grid container sx={{ justifyContent: { xs: 'center', sm: 'unset', md: 'center', lgf: 'right' } }}>
                            {['Privacy Policy', 'Terms of use', 'Cookie'].map(link => (
                                <Link key={uuidv4()} variant='caption' underline='none' sx={{ cursor: 'pointer' }} className='link' mr={3}>
                                    {link}
                                </Link>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        lgf={5}
                        sx={{ marginTop: { xs: '10px', sm: 'unset' } }}
                        container
                    >
                        <Typography
                            color='#7e7e7e'
                            variant='caption'
                            component='p'
                            className='w-100'
                            sx={{ textAlign: { xs: 'center', sm: 'unset', md: 'center', lgf: 'unset' } }}
                        >
                            &copy; EzeSneakers {new Date().getFullYear()} | Save our planet by buying restored shoes
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </footer >
}