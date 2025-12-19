import { useEffect } from "react";
import { useLoaderData, Link, useNavigation } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import SkeletonDetails from "../components/SkeletonDetails";
import SkeletonGrid from "../components/SkeletonGrid";

export default function MovieDetails() {
  const { movie } = useLoaderData();
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const favorite = isFavorite(movie.imdbID);
  const navigation = useNavigation();

  const {
    Title,
    Year,
    Genre,
    Runtime,
    Rated,
    Released,
    Country,
    Language,
    Director,
    Writer,
    Actors,
    Plot,
    Poster,
    imdbID,
    imdbRating,
    BoxOffice,
    Production,
    Ratings = [],
    Type,
  } = movie;

  const imgSrc = Poster && Poster !== "N/A" ? Poster : "/vite.svg";

  useEffect(() => {
    if (Title) {
      document.title = `${Title} | Movie DB`;
      const link = document.querySelector("link[rel~='icon']");
      if (link) {
        link.href = "/movie-cam.svg";
      }
    }
    return () => {
      document.title = "Movie DB";
      const link = document.querySelector("link[rel~='icon']");
      if (link) link.href = "/movie.svg";
    };
  }, [Title]);

  if (navigation.state === "loading") {
    // If navigating back to home or favorite, show grid skeleton
    if (
      navigation.location.pathname === "/" ||
      navigation.location.pathname === "/favorite"
    ) {
      return <SkeletonGrid />;
    }
    // Otherwise show details skeleton (refreshing or similar)
    return <SkeletonDetails />;
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div>
        <img
          src={imgSrc}
          alt={`${Title} poster`}
          className="w-full rounded-lg border object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="mt-4 flex flex-wrap gap-2">
          {String(Genre || "")
            .split(",")
            .map((g) => g.trim())
            .filter(Boolean)
            .map((g) => (
              <span
                key={g}
                className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 border border-blue-200"
              >
                {g}
              </span>
            ))}
        </div>
      </div>

      <div className="lg:col-span-2 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">{Title}</h1>
            <p className="text-gray-600">
              {Year} • {Type?.toUpperCase()} • {Runtime}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <button
              onClick={toggleFavorite}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md border transition-colors ${
                favorite
                  ? "bg-red-50 border-red-200 text-red-600 hover:bg-red-100"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={favorite ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <span className="text-sm font-medium">
                {favorite ? "Saved" : "Favorite"}
              </span>
            </button>
            {imdbRating && (
              <div className="text-sm">
                <span className="font-semibold">IMDb</span>{" "}
                <span className="inline-block rounded bg-yellow-100 px-2 py-1">
                  {imdbRating}
                </span>
              </div>
            )}
          </div>
        </div>

        <p className="text-gray-800 dark:text-gray-200">{Plot}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border p-4 bg-white dark:bg-gray-800">
            <div className="text-sm text-gray-600">Released</div>
            <div className="font-medium">{Released}</div>
          </div>
          <div className="rounded-lg border p-4 bg-white dark:bg-gray-800">
            <div className="text-sm text-gray-600">Rated</div>
            <div className="font-medium">{Rated}</div>
          </div>
          <div className="rounded-lg border p-4 bg-white dark:bg-gray-800">
            <div className="text-sm text-gray-600">Country</div>
            <div className="font-medium">{Country}</div>
          </div>
          <div className="rounded-lg border p-4 bg-white dark:bg-gray-800">
            <div className="text-sm text-gray-600">Language</div>
            <div className="font-medium">{Language}</div>
          </div>
          <div className="rounded-lg border p-4 bg-white dark:bg-gray-800">
            <div className="text-sm text-gray-600">Director</div>
            <div className="font-medium">{Director}</div>
          </div>
          <div className="rounded-lg border p-4 bg-white dark:bg-gray-800">
            <div className="text-sm text-gray-600">Cast</div>
            <div className="font-medium">{Actors}</div>
          </div>
          {Writer && (
            <div className="rounded-lg border p-4 bg-white dark:bg-gray-800">
              <div className="text-sm text-gray-600">Writer</div>
              <div className="font-medium">{Writer}</div>
            </div>
          )}
          {BoxOffice && (
            <div className="rounded-lg border p-4 bg-white dark:bg-gray-800">
              <div className="text-sm text-gray-600">Box Office</div>
              <div className="font-medium">{BoxOffice}</div>
            </div>
          )}
          {Production && (
            <div className="rounded-lg border p-4 bg-white dark:bg-gray-800">
              <div className="text-sm text-gray-600">Production</div>
              <div className="font-medium">{Production}</div>
            </div>
          )}
        </div>

        {!!Ratings.length && (
          <div className="space-y-2">
            <div className="text-sm font-medium">Ratings</div>
            <div className="flex flex-wrap gap-2">
              {Ratings.map((r) => (
                <span
                  key={r.Source}
                  className="inline-flex items-center rounded-md border bg-white dark:bg-gray-800 px-3 py-1 text-sm"
                >
                  <span className="font-semibold">{r.Source}</span>
                  <span className="ml-2 text-gray-700">{r.Value}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-4">
          <Link
            to="/"
            className="rounded-md border px-4 py-2 text-sm hover:bg-gray-50"
          >
            Back
          </Link>
          <a
            href={`https://www.imdb.com/title/${imdbID}/`}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            View on IMDb
          </a>
        </div>
      </div>
    </section>
  );
}
