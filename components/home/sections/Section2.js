import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import SwiperSneakers from '../SwiperSneakers'
import NextLink from 'next/link'
import { motion } from 'framer-motion'
import useOnScreen from '../../useOnScreen';
import { useEffect, useRef, useState } from 'react';
import TypographyFade from '../../animated-components/TypographyFade'
import ButtonFade from '../../animated-components/ButtonFade'
export default function Section2({ featuredSneakers }) {

    return <section>
        <Grid container sx={{ height: '100vh', marginTop: '10vh' }}>
            <Grid container direction='column'>
                <TypographyFade
                    contentText='Welcome to EzeSneakers'
                    componentName='h1'
                    variant='h2'
                    align='center'
                    gutterBottom
                />
                <TypographyFade
                    contentText='Save our planet by buying restored shoes'
                    componentName='h2'
                    variant='h2'
                    align='center'
                />
                <Grid my={8} container justifyContent='center' alignItems='center'>
                    <NextLink href='/sneakers' passHref >
                        <ButtonFade size='large' variant='contained' buttonText='show sneakers' />
                    </NextLink>
                </Grid>
                <TypographyFade
                    componentName='h3' variant='h3' align='left'
                    sx={{ fontFamily: 'montserrat, sans-serif', fontWeight: 300 }}
                    gutterBottom contentText='Featured'

                />
                <Box sx={{ maxWidth: '100%' }} >
                    <SwiperSneakers sneakers={featuredSneakers} />
                </Box>
            </Grid>
        </Grid>
    </section >
}