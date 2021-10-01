import Grid from '@mui/material/Grid'
import { motion } from 'framer-motion'
import useOnScreen from '../useOnScreen';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
export default function ImageGrid({ imgUrl }) {
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
            sx={{ height: '70vh' }}
            initial={{ opacity: 0 }}
            animate={visible && { opacity: 1 }}
            transition={{ duration: 0.6 }}
            ref={ref}
        >
            <img src={imgUrl}
                loading='lazy'
                style={{ objectFit: 'cover', height: '100%', width: '100%', borderRadius: '10px', }}
            />
        </Grid>
    )
}