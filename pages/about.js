import Grid from '@mui/material/Grid'
import Head from 'next/head'
import Section1 from '../components/about/Section1'
import Section2 from '../components/about/Section2'
import Section3 from '../components/about/Section3'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme()
theme = responsiveFontSizes(theme)
export default function About() {
    return (
        <>
            <Head>
                <title>Home Page</title>
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