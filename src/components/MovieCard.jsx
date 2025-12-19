import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function MovieCard({ movie }) {
  // console.log(movie);
  const { Poster, Title, Year, imdbID } = movie;
  const src = Poster && Poster !== "N/A" ? Poster : "/vite.svg";

  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const favorite = isFavorite(imdbID);

  function toggleFavorite(e) {
    e.preventDefault();
    e.stopPropagation();
    if (favorite) {
      removeFavorite(imdbID);
    } else {
      addFavorite(movie);
    }
  }

  return (
    <div className="relative group">
      <Link
        to={`/movie/${imdbID}`}
        className="block rounded-md border bg-white hover:shadow transition-shadow h-full"
      >
        <div className="relative">
          <img
            src={src}
            alt={`${Title} poster`}
            loading="lazy"
            decoding="async"
            sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
            className="h-64 w-full object-cover rounded-t-md"
          />
          <button
            onClick={toggleFavorite}
            className={`absolute top-2 right-2 p-2 rounded-full shadow transition-all focus:outline-none focus:ring-2 focus:ring-red-500 z-10 ${
              favorite
                ? "bg-white/90 text-red-500 hover:bg-white hover:scale-105"
                : "bg-black/50 text-white hover:bg-red-500 hover:text-white"
            }`}
            title={favorite ? "Remove from favorites" : "Add to favorites"}
            aria-label={
              favorite
                ? `Remove ${Title} from favorites`
                : `Add ${Title} to favorites`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={favorite ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>
        <div className="p-3">
          <div className="font-medium truncate" title={Title}>
            {Title}
          </div>
          <div className="text-sm text-gray-600">{Year}</div>
        </div>
      </Link>
    </div>
  );
}
