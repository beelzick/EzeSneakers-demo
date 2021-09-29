import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import useOnScreen from '../useOnScreen';
import { useEffect, useRef, useState } from 'react';

export default function TextGrid({ text }) {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    const [visible, setVisible] = useState(isVisible)

    useEffect(() => {
        if (isVisible) {
            setVisible(true)
        }
    }, [isVisible])

    return <Grid item xs={6} p={2} sx={{ height: '84vh' }}
        ref={ref}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={visible && { opacity: 1 }}
        transition={{ duration: 0.6 }}
    >
        <Grid container alignItems='center' justifyContent='center' sx={{ height: '100%' }}>
            <Typography variant='h4' component='h2' align='center'>
                {text}
            </Typography>
        </Grid>
    </Grid>
}