import {
  Form,
  useSearchParams,
  useSubmit,
  useNavigate,
  Link,
} from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { searchMovies } from "../lib/omdb";

function SearchBar() {
  const [searchParams] = useSearchParams();
  const submit = useSubmit();
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  const q = searchParams.get("s") || "";
  const typeParam = searchParams.get("type") || "";
  const yearParam = searchParams.get("y") || "";

  const [query, setQuery] = useState(q);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // Sync local state with URL param
  useEffect(() => {
    setQuery(q);
  }, [q]);

  // Debounced Autocomplete
  useEffect(() => {
    // Only search if query is different from URL param (avoid initial load search)
    // or if the user is actively typing (we can check focus, but simpler logic is fine)
    if (query.trim().length < 3) {
      setSuggestions([]);
      return;
    }

    const timeoutId = setTimeout(async () => {
      setIsSearching(true);
      try {
        const data = await searchMovies(query, 1, { type: typeParam });
        if (data.Search) {
          setSuggestions(data.Search.slice(0, 5));
          setShowSuggestions(true);
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error("Autocomplete error:", error);
        setSuggestions([]);
      } finally {
        setIsSearching(false);
      }
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [query, typeParam]);

  // Close suggestions on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleFilterChange(event) {
    submit(event.currentTarget.form);
  }

  function handleInputChange(e) {
    setQuery(e.target.value);
    setShowSuggestions(true);
  }

  function handleSuggestionClick(imdbID) {
    navigate(`/movie/${imdbID}`);
    setShowSuggestions(false);
  }

  return (
    <div className="w-full flex flex-col items-center mb-8 relative z-50">
      <Form
        method="get"
        action="/movies"
        className="w-full flex flex-col items-center"
        role="search"
        autoComplete="off"
      >
        <div
          ref={wrapperRef}
          className="relative flex flex-col md:flex-row w-full max-w-2xl items-center gap-3 bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500/20"
        >
          <div className="relative flex-1 w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className={`w-5 h-5 transition-colors duration-200 ${
                  isSearching
                    ? "text-blue-500"
                    : "text-gray-500 dark:text-gray-400"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              name="s"
              value={query}
              onChange={handleInputChange}
              onFocus={() => query.length >= 3 && setShowSuggestions(true)}
              placeholder="Search for movies, series..."
              className="block w-full p-3 pl-10 text-sm text-gray-900 border-none rounded-lg bg-transparent focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400"
              required
              aria-label="Search movies"
            />

            {/* Loading Indicator */}
            {isSearching && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <div className="animate-spin h-4 w-4 border-2 border-blue-500 rounded-full border-t-transparent"></div>
              </div>
            )}
          </div>

          <div className="flex w-full md:w-auto items-center gap-2 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 pt-2 md:pt-0 md:pl-2">
            <select
              name="type"
              defaultValue={typeParam}
              onChange={handleFilterChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Filter by type"
            >
              <option value="">All Types</option>
              <option value="movie">Movies</option>
              <option value="series">Series</option>
              <option value="episode">Episodes</option>
            </select>

            <input
              type="number"
              name="y"
              defaultValue={yearParam}
              placeholder="Year"
              min="1900"
              max={new Date().getFullYear() + 5}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              aria-label="Filter by year"
            />

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Search
            </button>
          </div>

          {/* Autocomplete Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
              <ul className="py-2 divide-y divide-gray-100 dark:divide-gray-700">
                {suggestions.map((movie) => (
                  <li key={movie.imdbID}>
                    <button
                      type="button"
                      onClick={() => handleSuggestionClick(movie.imdbID)}
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 group"
                    >
                      <div className="w-8 h-12 bg-gray-200 dark:bg-gray-700 rounded flex-shrink-0 overflow-hidden">
                        {movie.Poster !== "N/A" ? (
                          <img
                            src={movie.Poster}
                            alt=""
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                            No Img
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {movie.Title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {movie.Year} • {movie.Type}
                        </p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="bg-gray-50 dark:bg-gray-700/50 px-4 py-2 text-xs text-center text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700">
                Press Enter to see all results
              </div>
            </div>
          )}
        </div>
      </Form>
    </div>
  );
}

export default SearchBar;
