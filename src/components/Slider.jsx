import { Virtual, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
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
        <div className='w-full lg:p-24'>
            <motion.div variants={textVariant()}>
                <p className="font-black md:text-[40px] sm:text-[50px] xs:text-[40px] text-[20px]">Our BestSellers ...</p>

            </motion.div>
            <Swiper modules={[Virtual, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                virtual
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {dummyData.map((data, index) => (
                    <SwiperSlide key={index} virtualIndex={index}>
                        <div className='pl-16 mt-8'>
                            <img src={data.image} alt={data.productName} className='transitions-theme rotate-0 hover:rotate-[25deg]' />
                            <p>{data.productName}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
