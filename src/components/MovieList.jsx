import MovieCard from "./MovieCard";

function MovieList({ movies = [] }) {
  if (!movies.length) {
    return (
      <h4 className="text-center text-gray-600">No matching movies found...</h4>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
