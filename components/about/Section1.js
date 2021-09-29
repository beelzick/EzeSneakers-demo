import Grid from '@mui/material/Grid'
import Sec1Right from './Sec1Right'
import { motion } from 'framer-motion'

export default function Section1() {

    return <section className='w100'>
        <Grid container sx={{ height: '87vh' }}>
            <Grid xs={6} item sx={{ height: '84vh' }}
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <img src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1600/v1632230088/ecom-portfolio/home-4.jpg'
                    style={{ objectFit: 'cover', height: '100%', width: '100%', borderRadius: '10px', filter: 'grayscale(90%)' }}
                />
            </Grid>
            <Sec1Right />
        </Grid>
    </section>
}