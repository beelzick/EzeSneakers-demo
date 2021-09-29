import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'

export default function Sec1Right() {

    return <Grid item xs={6} p={2} sx={{ height: '84vh' }} component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
    >
        <Grid container direction='column' alignItems='center' justifyContent='center' sx={{ height: '100%' }} >
            <div style={{ flexGrow: 0.5 }} />
            <Typography variant='h3' component='h1' align='center'>
                EzeSneakers
            </Typography>
            <div style={{ flexGrow: 0.1 }} />
            <Typography variant='h4' component='h2' align='center'>
                We offer professionally restored shoes at the lowest prices
            </Typography>
            <div style={{ flexGrow: 0.8 }} />
        </Grid>
    </Grid>
}