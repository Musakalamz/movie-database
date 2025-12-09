function SearchBar() {
  return (
    <form className="mb-6 flex flex-col items-center">
      <div className="flex w-full max-w-xl items-center gap-3">
        <input
          type="text"
          id="search-input"
          placeholder="Search movies..."
          className="w-full rounded-full border border-grey-300 px-4 py-2 focus:ouyline-none focus:ring focus:ring-blue-200 dark:border-gray-700 dark:bg-grey-800 dark:text-grey-100 "
          aria-label="Search movies"
        />

        <select
          name=""
          id=""
          className="rounded-full border border-gray-300 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          aria-label="Filter by type"
        >
          <option value="all">All</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>

        <input
          type="number"
          inputMode="numeric"
          placeholder="year"
          className="w-24 rounded-full border border-grey-300 px-3 py-2 text-sm dark:border-grey-700 dark:bg-grey-800 dark:text-grey-100"
          aria-label="filter by year"
        />

        <button
          type="submit"
          className="rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
