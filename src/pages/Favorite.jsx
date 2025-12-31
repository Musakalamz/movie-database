import { Link, useNavigation } from "react-router-dom";
import {useEffect} from "react";
import MovieCard from "../components/MovieCard";
import { useFavorites } from "../context/FavoritesContext";
import SkeletonGrid from "../components/SkeletonGrid";
import SkeletonDetails from "../components/SkeletonDetails";

export default function Favorite() {
  const { favorites, removeFavorite } = useFavorites();
  const navigation = useNavigation();

  useEffect(() => {
    document.title = "Favorite | Movie DB";
    const link = document.querySelector("link[rel~='icon']");
    if (link) Link.href = "/favorite.svg";
  }, [])

  if (navigation.state === "loading") {
    // If navigating to a movie details page, show the details skeleton
    if (navigation.location.pathname.startsWith("/movie/")) {
      return <SkeletonDetails />;
    }
    // Otherwise show the grid skeleton
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b pb-4 dark:border-gray-700 animate-pulse">
          <div className="space-y-2">
            <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>
        <SkeletonGrid count={8} />
      </div>
    );
  }

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-6xl mb-4">🍿</div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          No favorites yet
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-sm">
          You haven't added any movies to your watchlist. Browse movies and
          click the heart icon to save them here.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center rounded-md bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Browse Movies
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between border-b pb-4 dark:border-gray-700">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Your Favorites
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {favorites.length} {favorites.length === 1 ? "movie" : "movies"}{" "}
            saved
          </p>
        </div>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((movie) => (
          <div key={movie.imdbID} className="relative group">
            <MovieCard movie={movie} />
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                removeFavorite(movie.imdbID);
              }}
              className="absolute top-2 right-2 p-2 rounded-full bg-white/90 text-red-500 shadow hover:bg-white hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-red-500 z-10"
              title="Remove from favorites"
              aria-label={`Remove ${movie.Title} from favorites`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
