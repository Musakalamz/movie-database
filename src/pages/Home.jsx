import { useLoaderData } from "react-router-dom";
import MovieList from "../components/MovieList";

function Home() {
  const { movies } = useLoaderData();
  return <MovieList movies={movies} />;
}

export default Home;
