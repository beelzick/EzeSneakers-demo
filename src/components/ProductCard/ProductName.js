import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import NextLink from 'next/link'

export default function ProductName({ name, id }) {
    return (
        <Grid item xs={8} sm={11} md={7}>
            <NextLink href={`/sneakers/${id}`} passHref>
                <Typography variant='subtitle1' component='h2' sx={{ cursor: 'pointer' }}>
                    {name}
                </Typography>
            </NextLink>
        </Grid>
    )
}