import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TypographyFade from '../../animated-components/TypographyFade'
import ButtonFade from '../../animated-components/ButtonFade'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import useOnScreen from '../../useOnScreen'


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
        <Grid container sx={{ height: '100vh', marginTop: '20vh' }}>
            <Grid item xs={5} sx={{ height: '90vh' }}>
                <Box sx={{ width: 'fit-content' }}>
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={visible && { opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        ref={ref}
                        src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1138/v1632926840/ecom-portfolio/home-11.webp'
                        style={{ objectFit: 'contain', height: '90vh', width: '100%', borderRadius: '10px' }}
                    />
                </Box>
            </Grid>
            <Grid item xs={7} p={2} sx={{ height: '90vh' }}>
                <Grid container direction='column' justifyContent='center' alignItems='center' sx={{ height: '100%' }} >
                    <TypographyFade contentText='Check out our new Summer Collection' componentName='h2' variant='h2' align='center' />
                    <div style={{ flexGrow: 0.1 }} />
                    <ButtonFade buttonText='Summer Collection' size='large' variant='contained' />
                    <div style={{ flexGrow: 0.1 }} />
                </Grid>
            </Grid>
        </Grid>
    </section >
}