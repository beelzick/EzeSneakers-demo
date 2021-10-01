import Grid from '@mui/material/Grid'
import TypographyFade from '../animated-components/TypographyFade'

export default function TextGrid({ text, order }) {
    return <Grid item xs={12} md={6} p={2} sx={{ height: { md: '80vh', xs: '30vh' } }} order={order}
    >
        <Grid container alignItems='center' justifyContent='center' sx={{ height: '100%' }}>
            <TypographyFade variant='h4' contentText={text} componentName='h2' align='center' />
        </Grid>
    </Grid>
}