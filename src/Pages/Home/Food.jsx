import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide1.jpg";
import slide3 from "../../assets/home/slide1.jpg";
import slide4 from "../../assets/home/slide1.jpg";
import slide5 from "../../assets/home/slide1.jpg";

const Food = () => {
  return (
    <div>
      <Swiper watchSlidesProgress={true} slidesPerView={4}  className="mySwiper md:w-[77rem] mx-auto md:h-[32rem] ">
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className=" justify-center flex -mt-12 text-white/75">SALADS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className=" justify-center flex -mt-12 text-white/75">SOUPS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className=" justify-center flex -mt-12 text-white/75">PIZZAS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className=" justify-center flex -mt-12 text-white/75">DESSERTS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className=" justify-center flex -mt-12 text-white/75">SALADS</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Food;
