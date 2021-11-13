import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import ImageContainer from '../ImageContainer';

export default function SwiperImage() {
    return (
        <Swiper
            modules={[Autoplay, A11y, Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 6000 }}
            navigation
            pagination={{ clickable: true }}
            style={{ borderRadius: '10px' }}
        >
            <SwiperSlide>
                <ImageContainer
                    src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1000/v1633035797/ecom-portfolio/home-14.webp'
                    alt='Hanging trainers on a tree'
                />
            </SwiperSlide>
            <SwiperSlide>
                <ImageContainer
                    src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1000/v1632911125/ecom-portfolio/home-9.webp'
                    alt='Air Max Sneakers'
                />
            </SwiperSlide>
            <SwiperSlide>
                <ImageContainer
                    src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1000/v1632911351/ecom-portfolio/home-10.webp'
                    alt='Converse Sneakers'
                />
            </SwiperSlide>
            <SwiperSlide>
                <ImageContainer
                    src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1000/v1634052388/ecom-portfolio/home-21.webp'
                    alt='Orange Air Max Sneakers'
                />
            </SwiperSlide>
        </Swiper>
    )
}