import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { addToCartIcon } from "../assets/images";

const FoodCard = ({ name, image, description, price, id }) => {
  const { currency, addToCart } = useContext(AppContext);
  return (
    <div className="grid grid-cols-[85px_1fr] items-center px-4 py-4 gap-2 border border-border_color rounded-2xl my-4 shadow-lg">
      {/* Item image */}
      <div className="w-[82px]  h-[82px] rounded-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      {/* Item name and price */}
      <div className=" flex flex-col gap-3">
        <div>
          <h3 className=" font-semibold">{name}</h3>

          <p className="text-xs text-gray-600">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-main_red font-bold text-sm">{`${currency}${price}`}</p>
          <button
            onClick={() => addToCart(id)}
            className="flex gap-2 py-1 px-2 bg-main_red rounded-lg items-center"
          >
            <p className="text-xs font-bold text-white">Select</p>
            <img src={addToCartIcon} alt="" width={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
