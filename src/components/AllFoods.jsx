import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const AllFoods = () => {
  const { allFoodItems } = useContext(AppContext);
  return <div>AllFoods</div>;
};

export default AllFoods;
