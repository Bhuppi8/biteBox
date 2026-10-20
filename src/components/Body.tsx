import { useState } from "react";
import restaurantList from "../data.json";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const normalizedSearchText = searchText.trim().toLowerCase();
  const filteredRestaurants = restaurantList.filter(({ data }) => {
    const searchableText = [data.name, data.area, ...data.cuisines]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedSearchText);
  });

  return (
    <section id="home" aria-labelledby="restaurant-heading">
      <form
        role="search"
        className="mb-8 flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition focus-within:border-orange-300 focus-within:ring-4 focus-within:ring-orange-100 sm:max-w-2xl"
        onSubmit={(event) => event.preventDefault()}
      >
        <svg
          aria-hidden="true"
          className="ml-3 h-5 w-5 shrink-0 text-slate-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="m16 16 4 4" />
        </svg>
        <input
          type="search"
          aria-label="Search restaurants and cuisines"
          className="min-w-0 flex-1 bg-transparent py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-base"
          placeholder="Search for restaurants, cuisines..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        {searchText && (
          <button
            type="button"
            aria-label="Clear search"
            className="rounded-full px-3 py-2 text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-50"
            onClick={() => setSearchText("")}
          >
            Clear
          </button>
        )}
      </form>

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
          {filteredRestaurants.length}{" "}
          {filteredRestaurants.length === 1 ? "place" : "places"} to explore
        </p>
      </div>

      {filteredRestaurants.length > 0 ? (
        <div
          id="restaurants"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredRestaurants.map(({ data }) => (
            <RestaurantCard key={data.id} {...data} />
          ))}
        </div>
      ) : (
        <p
          id="restaurants"
          className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center text-sm text-slate-600"
          role="status"
        >
          No restaurants found. Try another restaurant name or cuisine.
        </p>
      )}
    </section>
  );
};

export default Body;
