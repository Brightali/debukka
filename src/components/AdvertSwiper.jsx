import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Pagination } from "swiper/modules";

import { slides } from "../assets/images/slides";

const AdvertSwiper = () => {
  return (
    <div className="frame">
      <div className="inner-frame py-3">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          // autoplay={{ delay: 1000 }}
          // pagination={{ clickable: true }}
          loop={true}
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i} className="rounded-xl overflow-hidden">
              <img src={s} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default AdvertSwiper;
