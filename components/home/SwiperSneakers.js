import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y } from 'swiper';
import ProductCard from '../product-card/ProductCard';
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import useOnScreen from '../useOnScreen';

export default function SwiperSneakers({ sneakers }) {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    const [visible, setVisible] = useState(isVisible)

    useEffect(() => {
        if (isVisible) {
            setVisible(true)
        }
    }, [isVisible])

    return <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={visible && { opacity: 1 }}
        transition={{ duration: 0.5 }}
    >
        <Swiper
            modules={[Scrollbar, A11y]}
            spaceBetween={35}
            slidesPerView={3}
            scrollbar={{ draggable: true }}
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
}