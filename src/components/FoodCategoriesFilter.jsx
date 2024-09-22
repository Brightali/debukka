import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useContext } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, FreeMode } from "swiper/modules";
import { AppContext } from "../context/AppContext";

import FoodCard from "./FoodCard";

const FoodCategoriesFilter = () => {
  const { foods } = useContext(AppContext);

  const [activeCategory, setActiveCategory] = useState(0);

  const categorySelect = (i) => {
    setActiveCategory(i);
  };

  return (
    <div className="frame">
      <div className="inner-frame flex flex-col py-4 text-text_color_dark">
        <div className=" font-semibold flex justify-between py-2">
          <h2>Food Categories</h2>
          <Link to={"menu"}>
            <button className="text-main_red">See all</button>
          </Link>
        </div>

        <Swiper
          freeMode={true}
          slidesPerView={"auto"}
          spaceBetween={10}
          modules={[Pagination, FreeMode]}
          className="mb-8 mt-4"
        >
          {foods.map((category, index) => {
            // Get the category name (e.g., Maindishes, Protein)
            const categoryName = Object.keys(category)[0];

            // Get the category details (image and items array)
            const categoryDetails = category[categoryName];

            return (
              <SwiperSlide key={index} className="w-max">
                <button
                  onClick={() => categorySelect(index)}
                  className={`grid grid-cols-[20px_1fr] gap-3 w-full h-full px-4 py-2 rounded-lg ${
                    index === activeCategory
                      ? "bg-main_red text-white"
                      : "border-main_red border bg-bg_color"
                  }`}
                >
                  <div className="w-6 h-6 rounded-full overflow-hidden">
                    <img
                      src={categoryDetails.image}
                      alt={categoryName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h2>{categoryName}</h2>
                  </div>
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {foods[activeCategory] && (
          <div className="w-full shadow-xl mb-8 rounded-2xl">
            {/* Get the selected category name */}

            {Object.keys(foods[activeCategory]).map((categoryName, index) => {
              const categoryDetails = foods[activeCategory][categoryName];

              return (
                <div
                  key={index}
                  className="p-4 max-h-[30rem] overflow-scroll noScrollbar"
                >
                  {categoryDetails.items.slice().map((item, itemIndex) => (
                    <FoodCard
                      key={itemIndex}
                      id={item.id}
                      image={item.image}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodCategoriesFilter;
