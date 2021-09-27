import Head from 'next/head'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import NextLink from 'next/link'
import CustomImage from '../components/custom-image/CustomImage'
import Navbar from '../components/layout/navbar/Navbar'
import styles from '../styles/index.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Navbar />
      <main>
        <Grid container className='page-container'>
          <Grid container sx={{ height: '80vh' }}>
            <Grid item xs={6}>
              <img src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1600/v1632230088/ecom-portfolio/home-4.jpg'
              />
            </Grid>
            <Grid item xs={6}>

            </Grid>
          </Grid>
        </Grid>
      </main>
    </>
  )
}