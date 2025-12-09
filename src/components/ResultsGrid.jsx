import MovieCard from "./MovieCard";

function ResultsGrid({ items }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((movie) => {
        <MovieCard key={movie.imdbID} movie={movie} />;
      })}
    </div>
  );
}

export default ResultsGrid;
