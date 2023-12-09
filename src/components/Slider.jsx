import { Virtual, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import React from 'react';
import { textVariant } from '../utils/motion';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
    const [slidesPerView, setSlidesPerView] = React.useState(3);

    React.useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 640;
            const isMedium = window.innerWidth < 952 && window.innerWidth > 640;
            setSlidesPerView(isMobile ? 1 : isMedium ? 2 : 3);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call it initially to set the correct value on mount

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Dummy data with image and productName fields
    const dummyData = [
        { image: '/product1.png', productName: 'Nike' },
        { image: '/product2.png', productName: 'Adidas' },
        { image: '/product3.png', productName: 'Puma' },
        { image: '/product4.png', productName: 'Nike' },
        { image: '/product4.png', productName: 'Nike' },
        { image: '/product5.png', productName: 'Puma' },
        { image: '/product6.png', productName: 'Asics' },
        { image: '/product7.png', productName: 'Reebok' },
        { image: '/product8.png', productName: 'Nike' },
        // Add more data as needed
    ];

    return (
        <div className='w-full p-8 lg:p-24'>
            <motion.div variants={textVariant()}>
                <p className='font-black md:text-[40px] sm:text-[50px] xs:text-[40px] text-[30px]'>
                    Our BestSellers ...
                </p>
            </motion.div>
            <Swiper
                modules={[Virtual, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={slidesPerView}
                virtual
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {dummyData.map((data, index) => (
                    <SwiperSlide key={index} virtualIndex={index}>
                        <div className='lg:pl-16 lg:mt-8 mt-8 max-sm:p-14 p-10'>
                            <img
                                src={data.image}
                                alt={data.productName}
                                className='transitions-theme rotate-0 hover:rotate-[25deg]'
                            />
                            <p>{data.productName}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
