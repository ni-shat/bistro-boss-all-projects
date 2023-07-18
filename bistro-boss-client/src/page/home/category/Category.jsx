import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import SectionTitle from "../../../components/SectionTitle";

const Category = () => {
    return (
        <section className="mb-40">
            <SectionTitle heading={'ORDER ONLINE'} subHeading={'From 11:00am to 10:00pm'}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h3 className="text-4xl font-bold text-white uppercase drop-shadow-lg shadow-black relative -top-20">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h3 className="text-4xl shadow-black
                     relative -top-20 font-bold  uppercase text-white drop-shadow-lg">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h3 className="text-4xl font-bold text-white uppercase drop-shadow-lg shadow-black
                     relative -top-20">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h3 className="text-4xl font-bold text-white uppercase drop-shadow-lg shadow-black
                     relative -top-20">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    {/* <h3 className="text-4xl font-bold text-white drop-shadow-lg shadow-black
                    ">Salads</h3> */}
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;