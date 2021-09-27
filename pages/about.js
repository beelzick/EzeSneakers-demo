import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import NextLink from 'next/link'
import CustomImage from '../components/custom-image/CustomImage'
import Navbar from '../components/layout/navbar/Navbar'
import styles from '../styles/index.module.css'
import Image from 'next/image'
import Grow from '@mui/material/Grow';
import Head from 'next/head'
import { CSSTransition } from 'react-transition-group';

export default function About() {
    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>

            <Grid container className='page-container'>
                <Grid container sx={{ height: '87vh' }}>
                    <Grid item xs={6} sx={{ height: '84vh' }}>
                        <img src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1600/v1632230088/ecom-portfolio/home-4.jpg'
                            style={{ objectFit: 'cover', height: '100%', width: '100%', borderRadius: '10px', filter: 'grayscale(90%)' }}
                        />
                    </Grid>
                    <Grid item xs={6} p={2} sx={{ height: '84vh' }}>
                        <Grid container direction='column' alignItems='center' justifyContent='center' sx={{ height: '100%' }} >
                            <div style={{ flexGrow: 0.5 }}></div>
                            <Typography variant='h3' component='h1' align='center'>
                                EzeSneakers
                            </Typography>
                            <div style={{ flexGrow: 0.1 }}></div>
                            <Typography variant='h4' component='h2' align='center'>
                                Professionally restored shoes at the lowest prices
                            </Typography>
                            <div style={{ flexGrow: 0.1 }}></div>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <Button size='large' variant='contained'>Show products</Button>
                            </Box>
                            <div style={{ flexGrow: 0.8 }}></div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container sx={{ height: '100vh' }} alignItems='center'>
                    <Grid item xs={6} p={2} sx={{ height: '84vh' }}>
                        <Grid container alignItems='center' justifyContent='center' sx={{ height: '100%' }}>
                            <Typography variant='h4' component='h2' align='center'>
                                We want to give sneakers a second life, without compromising on their quality
                            </Typography>
                        </Grid>

                    </Grid>
                    <Grid item xs={6} sx={{ height: '84vh' }}>
                        <img src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_2266/v1632773761/ecom-portfolio/home-7.jpg'
                            style={{ objectFit: 'cover', height: '100%', width: '100%', borderRadius: '10px', filter: 'grayscale(90%)' }} />
                    </Grid>
                </Grid>

                <Grid container sx={{ height: '100vh' }} alignItems='center'>
                    <Grid item xs={6} sx={{ height: '84vh' }}>
                        <img src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1405/v1632774416/ecom-portfolio/home-8.jpg'
                            style={{ objectFit: 'cover', height: '100%', width: '100%', borderRadius: '10px', filter: 'grayscale(90%)' }} />
                    </Grid>
                    <Grid item xs={6} p={2} sx={{ height: '84vh' }}>
                        <Grid container alignItems='center' justifyContent='center' sx={{ height: '100%' }}>
                            <Typography variant='h4' component='h2' align='center'>
                                Our mission is to reduce the number of shoes thrown away
                            </Typography>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}