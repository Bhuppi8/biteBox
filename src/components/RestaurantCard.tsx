import { IMG_CDN_URL } from "../constants";

type RestaurantCardProps = {
  cloudinaryImageId: string;
  name: string;
  cuisines: string[];
  area: string;
  lastMileTravelString: string;
  costForTwoString: string;
  avgRating: string;
};

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}: RestaurantCardProps) => {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-lg hover:shadow-slate-900/5">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
          loading="lazy"
        />
        <span className="absolute bottom-3 left-3 rounded bg-white/95 px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-sm">
          {costForTwoString}
        </span>
      </div>
      <div className="p-4">
        <div className="flex min-h-12 items-start justify-between gap-3">
          <h2 className="line-clamp-2 text-base font-bold leading-6 text-slate-900">
            {name}
          </h2>
          <span className="flex shrink-0 items-center gap-1 rounded bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-800">
            <span aria-hidden="true" className="text-amber-500">
              ★
            </span>
            {avgRating}
          </span>
        </div>
        <p className="mt-2 line-clamp-1 text-sm text-slate-600">
          {cuisines.join(", ")}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-medium text-slate-500">
          <span>{area}</span>
          <span>{lastMileTravelString}</span>
        </div>
      </div>
    </article>
  );
};

export default RestaurantCard;
