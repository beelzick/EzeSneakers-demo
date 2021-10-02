import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TypographyFade from '../../animated-components/TypographyFade'
import NextLink from 'next/link'
import ButtonFade from '../../animated-components/ButtonFade'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import useOnScreen from '../../useOnScreen'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image'
import styles from './sections.module.css'

let theme = createTheme()
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

    return <section>
        <Grid container justifyConent='center' alignItems='center'
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
                            src={'https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1457,q_100/v1633034244/ecom-portfolio/home-13.webp'}
                            height={1457}
                            width={1374}
                            layout='responsive'
                            objectFit='cover'
                            quality={100}
                            className={styles['sec-3-image']}
                            alt='Person mending a sneaker on the grass'
                        />
                    </motion.div>
                </Box>
            </Grid>
            <Grid item xs={12} lg={5} p={2} pb={4} order={{ lg: 2 }} >
                <Grid container direction='column' justifyContent='center' alignItems='center' sx={{ height: '100%' }} >
                    <ThemeProvider theme={theme}>
                        <TypographyFade contentText='Check out the new Summer Collection' componentName='h2' variant='h2' align='center' my={3} />
                    </ThemeProvider>
                    <NextLink href='/sneakers/summer' passHref>
                        <ButtonFade buttonText='Summer Collection' size='large' variant='contained' />
                    </NextLink>
                </Grid>
            </Grid>
        </Grid>
    </section>
}