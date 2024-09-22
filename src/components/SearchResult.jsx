import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import FoodCard from "./FoodCard";

const SearchResult = () => {
  const { search, allFoodItems } = useContext(AppContext);
  const [searchedFood, setSearchedFood] = useState([]);

  useEffect(() => {
    if (search) {
      const filteredItems = allFoodItems.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setSearchedFood(filteredItems);
    } else {
      setSearchedFood([]);
    }
  }, [search, allFoodItems]);

  return search ? (
    <div className="absolute z-20 top-12 left-0 rounded-lg w-full max-h-[700px] p-4 overflow-scroll noScrollbar bg-white">
      {searchedFood.length > 0 ? (
        searchedFood.map((item, itemIndex) => (
          <FoodCard
            key={itemIndex}
            id={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))
      ) : (
        <p className="text-gray-500 text-center">Item not found</p>
      )}
    </div>
  ) : null;
};

export default SearchResult;
