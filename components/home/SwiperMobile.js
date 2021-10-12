import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Pagination } from 'swiper';
import ImageMobileContainer from './ImageMobileContainer'

export default function SwiperMobile() {


    return <Swiper
        modules={[Autoplay, A11y, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 6000 }}
        pagination={{ clickable: false }}
        style={{ borderRadius: '10px' }}
    >
        <SwiperSlide>
            <ImageMobileContainer
                src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1200/v1632926840/ecom-portfolio/home-11.webp'
                alt='Man running in water in trainers at sunset'
            />
        </SwiperSlide>
        <SwiperSlide>
            <ImageMobileContainer
                src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1200/v1632253941/ecom-portfolio/home-15.webp'
                alt='People sitting on a rock with their legs dangling'
            />
        </SwiperSlide>
        <SwiperSlide>
            <ImageMobileContainer
                src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1200/v1632926836/ecom-portfolio/home-17.webp'
                alt='Two white sneakers lying on a grass'
            />
        </SwiperSlide>
        <SwiperSlide>
            <ImageMobileContainer
                src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_1200/v1634052921/ecom-portfolio/home-22.webp'
                alt='Hanging white nike sneakers'
            />
        </SwiperSlide>
    </Swiper>
}