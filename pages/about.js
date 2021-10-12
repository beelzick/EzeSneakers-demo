import Grid from '@mui/material/Grid'
import Head from 'next/head'
import Section1 from '../components/about/Section1'
import Section2 from '../components/about/Section2'
import Section3 from '../components/about/Section3'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import typographyTheme from '../src/typographyTheme'

let theme = createTheme({
    ...typographyTheme
})

theme = responsiveFontSizes(theme)
export default function About() {
    return (
        <>
            <Head>
                <title>About | EzeSneakers</title>
                <meta name='description' content='EzeSneakers offers professionally restored shoes at the lowest prices.
                    We want to give sneakers a second life, without compromisiing on their quality'/>
            </Head>

            <Grid container className='page-container'>
                <ThemeProvider theme={theme}>
                    <Section1 />
                    <Section2 />
                    <Section3 />
                </ThemeProvider>
            </Grid>
        </>
    )
}