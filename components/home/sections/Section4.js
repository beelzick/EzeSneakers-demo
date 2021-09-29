import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import SwiperSneakers from '../SwiperSneakers'
import TypographyFade from '../../animated-components/TypographyFade'

export default function Section4({ summerSneakers }) {
    return <section>
        <TypographyFade contentText='Summer' componentName='h3' variant='h3' align='left' sx={{ fontFamily: 'montserrat, sans-serif', fontWeight: 300 }} gutterBottom />
        <Box sx={{ maxWidth: '100%' }}>
            <SwiperSneakers sneakers={summerSneakers} />
        </Box>
    </section >

}