import {
  FoodCategoriesFilter,
  RecentlyOrdered,
  SearchField,
  Footer,
  AdvertSwiper,
  Cart,
} from "../components";

function Home() {
  return (
    <div className="bg-bg_color">
      <Cart />
      <AdvertSwiper />
      <SearchField />
      <FoodCategoriesFilter />
      <RecentlyOrdered />
      <Footer />
    </div>
  );
}

export default Home;
