import Grid from '@mui/material/Grid'
import { motion } from 'framer-motion'
import useOnScreen from '../useOnScreen';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import styles from './about.module.css'

export default function ImageGrid({ imgUrl, width, height, alt }) {
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    const [visible, setVisible] = useState(isVisible)

    useEffect(() => {
        if (isVisible) {
            setVisible(true)
        }
    }, [isVisible])

    return (
        <Grid
            component={motion.div}
            item
            xs={12}
            md={6}
            sx={{ height: { md: '80vh', sx: '70vh' } }}
            initial={{ opacity: 0 }}
            animate={visible && { opacity: 1 }}
            transition={{ duration: 0.6 }}
            ref={ref}
        >
            <div className={styles['image-container']}>
                <Image
                    src={imgUrl}
                    width={width}
                    height={height}
                    objectFit='cover'
                    layout='responsive'
                    alt={alt}
                    placeholder='blur'
                    blurDataURL={imgUrl.replace('h_1400', 'h_100,q_10')}
                />
            </div>
        </Grid>
    )
}