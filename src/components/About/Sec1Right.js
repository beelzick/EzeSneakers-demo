import Grid from '@mui/material/Grid'
import TypographyFade from '../AnimatedComponents/TypographyFade'

export default function Sec1Right() {
    return (
        <Grid
            item
            xs={12}
            md={6}
            p={2}
            sx={{ height: { md: '80vh', } }}
            order={{ md: 2 }}
        >
            <Grid
                container
                direction='column'
                alignItems='center'
                justifyContent='center'
                sx={{ height: '100%' }}
            >
                <div style={{ flexGrow: 0.5 }} />
                <TypographyFade
                    variant='h3'
                    componentName='h1'
                    align='center'
                >
                    EzeSneakers
                </TypographyFade>
                <div style={{ flexGrow: 0.1 }} />
                <TypographyFade
                    variant='h4'
                    componentName='h2'
                    align='center'
                >
                    We offer professionally restored shoes at the lowest prices
                </TypographyFade>
                <div style={{ flexGrow: 0.8 }} />
            </Grid>
        </Grid>
    )
}