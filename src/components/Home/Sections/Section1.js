import SwiperImage from '../Swipers/SwiperImage'
import Box from '@mui/material/Box'
import SwiperMobile from '../Swipers/SwiperMobile'

export default function Section1() {
    return (
        <section className='fade'>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <SwiperImage />
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <SwiperMobile />
            </Box>
        </section>
    )
}