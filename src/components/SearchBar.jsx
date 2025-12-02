function SearchBar() {
  return (
    <form className="mb-6 flex items-center gap-2">
      <input
        type="text"
        onPointerLeave="Search Movies by Titles"
        className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200 "
      />
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
