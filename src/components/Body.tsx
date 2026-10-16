import restaurantList from "../data.json";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <section id="home" aria-labelledby="restaurant-heading">
      <div className="mb-7 flex flex-col justify-between gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-orange-700">
            Good food, delivered
          </p>
          <h1
            id="restaurant-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Restaurants near you
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Find something delicious from local favorites around Surat.
          </p>
        </div>
        <p className="text-sm font-medium text-slate-500">
          {restaurantList.length} places to explore
        </p>
      </div>
      <div
        id="restaurants"
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </section>
  );
};

export default Body;
