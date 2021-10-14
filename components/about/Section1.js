import Grid from '@mui/material/Grid'
import Sec1Right from './Sec1Right'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './about.module.css'

export default function Section1() {

    return <section className='w-100'>
        <Grid container sx={{ height: { md: '87vh' } }}>
            <Sec1Right />
            <Grid xs={12} md={6} item sx={{ height: { md: '80vh', xs: '70vh' } }}
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className={styles['sec-1-image-container']}>
                    <Image
                        src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1600/v1632230088/ecom-portfolio/home-4.webp'
                        height={1600}
                        width={1067}
                        layout='responsive'
                        objectFit='cover'
                        quality={100}
                        alt='Lying sneakers on the floor'
                        blurDataURL='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_100,q_10/v1632230088/ecom-portfolio/home-4.webp'
                        placeholder='blur'
                    />
                </div>
            </Grid>
        </Grid>
    </section>
}