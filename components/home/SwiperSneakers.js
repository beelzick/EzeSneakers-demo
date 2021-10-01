import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y } from 'swiper';
import ProductCard from '../product-card/ProductCard';
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import useOnScreen from '../useOnScreen';
import Box from '@mui/material/Box'
import TypographyFade from '../animated-components/TypographyFade'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme()
theme = responsiveFontSizes(theme)

export default function SwiperSneakers({ sneakers, title }) {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    const [visible, setVisible] = useState(isVisible)

    useEffect(() => {
        if (isVisible) {
            setVisible(true)
        }
    }, [isVisible])

    return <>
        <ThemeProvider theme={theme}>
            <TypographyFade
                componentName='h3' variant='h3' align='left'
                sx={{ fontFamily: 'montserrat, sans-serif', fontWeight: 300 }}
                gutterBottom contentText={title}

            />
        </ThemeProvider>
        <Box sx={{ maxWidth: '100%' }}>
            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={visible && { opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Swiper
                    modules={[Scrollbar, A11y,]}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        '@1.5': {
                            slidesPerView: 3,
                            spaceBetween: 25
                        },
                        '@2': {
                            slidesPerView: 4,
                            spaceBetween: 30
                        }
                    }}
                >
                    {sneakers.map(sneaker => (
                        <SwiperSlide>
                            <ProductCard
                                name={sneaker.name}
                                id={sneaker._id}
                                key={sneaker._id}
                                imgUrl={sneaker.imgUrl}
                                price={sneaker.price}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </Box>
    </>
}