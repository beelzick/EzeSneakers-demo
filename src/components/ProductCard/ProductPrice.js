import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function ProductPrice({ price }) {
    return (
        <Grid
            item
            xs={3}
            sm={12}
            md={4}
            container
            order={{ sm: 3 }}
            sx={{ justifyContent: { xs: 'flex-end', sm: 'unset', md: 'flex-end' } }}
        >
            <Typography
                variant='subtitle1'
                component='span'
                align='right'
                pr={1}
            >
                {price} $
            </Typography>
        </Grid>
    )
}