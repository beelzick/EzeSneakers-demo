import Grid from '@mui/material/Grid'
import Sec1Right from './Sec1Right'
import { motion } from 'framer-motion'

export default function Section1() {

    return <section className='w-100'>
        <Grid container sx={{ height: { md: '87vh' } }}>
            <Sec1Right />
            <Grid xs={12} md={6} item sx={{ height: { md: '84vh', xs: '70vh' } }}
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <img src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1600/v1632230088/ecom-portfolio/home-4.webp'
                    style={{ objectFit: 'cover', height: '100%', width: '100%', borderRadius: '10px' }}
                />
            </Grid>
        </Grid>
    </section>
}