import Grid from '@mui/material/Grid'
import Head from 'next/head'
import Section1 from '../components/about/Section1'
import Section2 from '../components/about/Section2'
import Section3 from '../components/about/Section3'

export default function About() {
    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>

            <Grid container className='page-container'>
                <Section1 />
                <Section2 />
                <Section3 />
            </Grid>
        </>
    )
}