import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import NextLink from 'next/link'
import { v4 as uuidv4 } from 'uuid';

export default function SelectionMenuSection({ title, links, linkStart }) {
    return (
        <Grid container justifyContent='center' item xs={3} lg={2}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                <Typography mb={1} variant='button' color='secondary' sx={{ fontFamily: 'montserrat, sans-serif' }}>
                    {title}
                </Typography>
                {links.map(link => (
                    <NextLink key={uuidv4()} href={`${linkStart}${link}`} passHref>
                        <Link underline='none' variant='button' className='link'>
                            {link}
                        </Link>
                    </NextLink>
                ))}
            </Box>
        </Grid>
    )
}