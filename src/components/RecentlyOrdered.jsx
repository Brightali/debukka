import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, FreeMode } from "swiper/modules";
import { AppContext } from "../context/AppContext";

const RecentlyOrdered = () => {
  const { loggedin } = useContext(AppContext);

  return loggedin ? (
    <div className="frame">
      <div className="inner-frame -mt-4 mb-12">
        <div className="text-center font-semibold text-sm md:text-4xl">
          Recently Ordered
        </div>

        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            600: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

            731: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          freeMode={true}
          slidesPerView={2}
          spaceBetween={20}
          modules={[Pagination, FreeMode]}
          className="pt-2 pb-6"
          loop={true}
        >
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <SwiperSlide
                key={index}
                className="shadow-lg px-24 py-16 md:py-28 rounded-2xl bg-gray-300"
              ></SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  ) : null;
};

export default RecentlyOrdered;
