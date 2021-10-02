import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { RiSearchEyeLine } from '@react-icons/all-files/ri/RiSearchEyeLine'
import { Typography } from '@mui/material'
import NextLink from 'next/link'
import { useSnackbar } from 'notistack'
import { useEffect } from 'react'
import Head from 'next/head'

export default function PageNotFound() {
    const { enqueueSnackbar } = useSnackbar()
    useEffect(() => {
        enqueueSnackbar('Page Not Found', {
            variant: 'error'
        })
    })

    return <>
        <Head>
            <title>404 Not Found</title>
        </Head>
        <Grid container className='page-container'>
            <Grid item xs={12}>
                <Grid container justifyContent='center' alignItems='center'>
                    <Box sx={{ fontSize: { xs: 200, md: 300 }, lineHeight: { xs: '200px', md: '350px' } }}>
                        4
                    </Box>
                    <Box sx={{ fontSize: { xs: 200, md: 300 }, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                        <RiSearchEyeLine />
                    </Box>
                    <Box sx={{ fontSize: { xs: 200, md: 300 }, lineHeight: { xs: '200px', md: '350px' } }}>
                        4
                    </Box >
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h2' component='h1' align='center' mb={3} sx={{ fontSize: { xs: 50 } }}>
                    Page Not Found
                </Typography>
                <Typography variant='h4' component='h2' align='center' mb={4}>
                    But it is not the end of the world!
                </Typography>
                <Box mb={4} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <NextLink passHref href='/' >
                        <Button size='large' variant='contained' >back to home page</Button>
                    </NextLink>
                </Box>
                <Typography variant='h6' component='h3' align='center' sx={{ fontFamily: 'Montserrat , sans-serif' }}>
                    Check url correctness or use the navigation bar
                </Typography>
            </Grid>
        </Grid>
    </>
}