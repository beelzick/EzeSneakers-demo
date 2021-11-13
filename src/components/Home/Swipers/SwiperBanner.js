import { Swiper, SwiperSlide } from 'swiper/react';
import Grid from '@mui/material/Grid'
import { A11y, Autoplay } from 'swiper';
import TextSlide from './TextSlide';
import { motion } from 'framer-motion'
import useOnScreen from '../../useOnScreen';
import { useRef, useState, useEffect } from 'react'

export default function SwiperBanner() {
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
            container
            justifyContent='center'
            alignItems='center'
            sx={{ maxWidth: '100%', height: '44px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.075)' }}
            component={motion.div}
            ref={ref}
            initial={{ opacity: 0 }}
            animate={visible && { opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Swiper
                modules={[Autoplay, A11y]}
                autoplay={{ delay: 4000 }}
                spaceBetween={50}
                slidesPerView={1}
                allowTouchMove={false}
            >
                <SwiperSlide>
                    <TextSlide text='Professionally restored shoes' />
                </SwiperSlide>
                <SwiperSlide>
                    <TextSlide text='Two-year guarantee' />
                </SwiperSlide>
                <SwiperSlide>
                    <TextSlide text='Free shipping from 100$' />
                </SwiperSlide>
                <SwiperSlide>
                    <TextSlide text='Next day delivery when you order before 4 pm' />
                </SwiperSlide>
                <SwiperSlide>
                    <TextSlide text='Check out new products' />
                </SwiperSlide>
                <SwiperSlide>
                    <TextSlide text='The best restoring shoes company in Europe' />
                </SwiperSlide>
                <SwiperSlide>
                    <TextSlide text='70 days return' />
                </SwiperSlide>
            </Swiper>
        </Grid>
    )
}