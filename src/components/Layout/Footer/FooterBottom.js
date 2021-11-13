import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { v4 as uuidv4 } from 'uuid';

export default function FooterBottom() {
    return (
        <Grid container justifyContent='center' mt={3}>
            <Grid item xs={12} lgf={6} order={{ lgf: 2 }}>
                <Grid
                    container
                    sx={{ justifyContent: { xs: 'center', sm: 'unset', md: 'center', lgf: 'right' } }}
                >
                    {['Privacy Policy', 'Terms of use', 'Cookie'].map(link => (
                        <Link
                            href='#'
                            key={uuidv4()}
                            variant='caption'
                            underline='none'
                            sx={{ cursor: 'pointer' }}
                            className='link'
                            mr={3}
                        >
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
    )
}