import Grid from '@mui/material/Grid'
import { motion } from 'framer-motion'
import useOnScreen from '../useOnScreen';
import { useEffect, useRef, useState } from 'react';

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
            xs={6}
            sx={{ height: '84vh' }}
            initial={{ opacity: 0 }}
            animate={visible && { opacity: 1 }}
            transition={{ duration: 0.6 }}
            ref={ref}
        >
            <img src={imgUrl}
                style={{ objectFit: 'cover', height: '100%', width: '100%', borderRadius: '10px', filter: 'grayscale(90%)' }}
            />
        </Grid>
    )
}