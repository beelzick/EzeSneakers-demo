import Grid from '@mui/material/Grid'
import TypographyFade from '../animated-components/TypographyFade'

export default function TextGrid({ text }) {
    return <Grid item xs={6} p={2} sx={{ height: '84vh' }}
    >
        <Grid container alignItems='center' justifyContent='center' sx={{ height: '100%' }}>
            <TypographyFade variant='h4' contentText={text} componentName='h2' align='center' />
        </Grid>
    </Grid>
}