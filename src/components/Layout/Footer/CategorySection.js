import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import NextLink from 'next/link'
import { v4 as uuidv4 } from 'uuid';
import { footerLinksFilter } from '../../../helpers/footerHelpers'

export default function CategorySection({ links, linkStarter, title }) {
    return (
        <Grid item xs={title === 'men' ? 6 : 4} md={4} lgf={1} mb={2}>
            <Grid container sx={{ justifyContent: { xs: 'unset', md: 'center', xl: 'unset' } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                        mb={1}
                        variant='button'
                        color='secondary'
                        sx={{ fontFamily: 'montserrat, sans-serif' }}
                    >
                        {title}
                    </Typography>
                    {links.map(link => (
                        <NextLink key={uuidv4()} href={`${linkStarter}${link}`} passHref>
                            <Link className='link' underline='none' variant='button' mb={0.3}>
                                {footerLinksFilter(link)}
                            </Link>
                        </NextLink>
                    ))}
                </Box>
            </Grid>
        </Grid>
    )
}