import { Form, useSearchParams, useSubmit } from "react-router-dom";

function SearchBar() {
  const [searchParams] = useSearchParams();
  const submit = useSubmit();
  
  const q = searchParams.get("s") || "";
  const type = searchParams.get("type") || "";
  const year = searchParams.get("y") || "";

  // Optional: Debounced search for the text input if desired,
  // but for OMDb (strict limits), search-on-submit or explicit button is often safer.
  // However, for "industry standard" feel, let's keep it manual submit for the text
  // to prevent accidental API spam, but auto-submit for filters.

  function handleFilterChange(event) {
    submit(event.currentTarget.form);
  }

  return (
    <Form
      method="get"
      action="/"
      className="mb-8 flex flex-col items-center w-full"
      role="search"
    >
      <div className="flex flex-col md:flex-row w-full max-w-2xl items-center gap-3 bg-white dark:bg-gray-800 p-2 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="relative flex-1 w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
            defaultValue={q}
            placeholder="Search for movies, series..."
            className="block w-full p-3 pl-10 text-sm text-gray-900 border-none rounded-lg bg-transparent focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400"
            required
            aria-label="Search movies"
          />
        </div>

        <div className="flex w-full md:w-auto items-center gap-2 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 pt-2 md:pt-0 md:pl-2">
          <select
            name="type"
            defaultValue={type}
            onChange={handleFilterChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            defaultValue={year}
            placeholder="Year"
            min="1900"
            max={new Date().getFullYear() + 5}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            aria-label="Filter by year"
          />

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"
          >
            Search
          </button>
        </div>
      </div>
    </Form>
  );
}

export default SearchBar;