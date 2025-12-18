import MovieCard from "./MovieCard";

function ResultsGrid({ items = [] }) {
  if (!items.length) {
    return <div className="text-gray-600">No results found.</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default ResultsGrid;
