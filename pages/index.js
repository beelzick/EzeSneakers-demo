import Head from 'next/head'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import NextLink from 'next/link'


import Navbar from '../components/layout/home-navbar/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Navbar />
      <main>
        <Grid container sx={{ height: '93.15vh' }}>
          <Grid item xs={6} sx={{ height: '100%' }}>
            <img src='https://res.cloudinary.com/dfvpybkta/image/upload/v1632230088/ecom-portfolio/home-4.jpg'
              style={{ objectFit: 'cover', height: '100%', width: '100%', filter: 'grayscale(100%)' }}
            />
          </Grid>
          <Grid item xs={6} sx={{ height: '100%' }} p={6}>
            <Grid container alignItems='center' >
              <Typography variant='h2' component='h1' mb={6} align='center'>
                EzeSneakers offers professionally restored shoes at the lowest prices
              </Typography>
              <Typography variant='h4' component='h2' mb={6} align='center'>
                Our mission is to reduce the number of shoes thrown away
              </Typography>
              <Typography variant='h4' component='h2' align='center'>
                We want to give sneakers a second life, without compromising on their quality
              </Typography>
            </Grid>
            <Grid container alignItems='center' justifyContent='center' p={8}>
              <NextLink passHref href='/sneakers'>
                <Button variant='contained' size='large' sx={{ width: '173.08px' }}>
                  show products
                </Button>
              </NextLink>
              <div style={{ flexGrow: 0.15 }} />
              <NextLink passHref href='/register'>
                <Button variant='outlined' size='large' sx={{ width: '173.08px' }}>
                  join us!
                </Button>
              </NextLink>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </>
  )
}