import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TypographyFade from '../../AnimatedComponents/TypographyFade'
import NextLink from 'next/link'
import ButtonFade from '../../AnimatedComponents/ButtonFade'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import useOnScreen from '../../useOnScreen'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image'
import styles from './sections.module.css'
import typographyTheme from '../../../helpers/typographyTheme'

let theme = createTheme({
    ...typographyTheme
})

theme = responsiveFontSizes(theme)

export default function Section3() {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    const [visible, setVisible] = useState(isVisible)

    useEffect(() => {
        if (isVisible) {
            setVisible(true)
        }
    }, [isVisible])

    return (
        <section>
            <Grid container alignItems='center'
                sx={{
                    margin: { md: '64px 0' },
                    marginBottom: { xs: '32px' }

                }}
            >
                <Grid item xs={12} lg={7} order={{ xs: 2 }}>
                    <Box sx={{ maxHeight: '80vh' }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={visible && { opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            ref={ref}
                            className={styles['sec-3-image-container']}
                        >
                            <Image
                                src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1400/v1634055222/ecom-portfolio/home-23.webp'
                                height={1400}
                                width={1400}
                                layout='responsive'
                                objectFit='cover'
                                quality={100}
                                className={styles['sec-3-image']}
                                placeholder='blur'
                                blurDataURL='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_100,q_10/v1634055222/ecom-portfolio/home-23.webp'
                                alt='Person lying on the street in autumn'
                            />
                        </motion.div>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={5} p={2} pb={4} order={{ lg: 2 }} >
                    <Grid container direction='column' justifyContent='center' alignItems='center' sx={{ height: '100%' }} >
                        <ThemeProvider theme={theme}>
                            <TypographyFade componentName='h2' variant='h2' align='center' my={3}>
                                Check out the New Autumn Collection
                            </TypographyFade>
                        </ThemeProvider>
                        <NextLink href='/sneakers/new/autumn' passHref>
                            <ButtonFade buttonText='Autumn Collection' size='large' variant='contained' />
                        </NextLink>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    )
}