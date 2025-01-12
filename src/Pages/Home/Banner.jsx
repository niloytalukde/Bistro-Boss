import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import bg1 from "../../assets/home/01.jpg";
import bg2 from "../../assets/home/02.jpg";
import bg3 from "../../assets/home/03.png";
import bg4 from "../../assets/home/04.jpg";
import bg5 from "../../assets/home/05.png";
const Banner = () => {
  return (
    <div className=" object-cover">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img className="h-[600px] w-full" src={bg1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full" src={bg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full" src={bg3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full" src={bg4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[600px] w-full" src={bg5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
