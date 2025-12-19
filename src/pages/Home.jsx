import { useLoaderData } from "react-router-dom";
import MovieList from "../components/MovieList";
import { useEffect } from "react";

function Home() {
  const { movies } = useLoaderData();

  useEffect(() => {
    document.title = "Movie DB";
    const link = document.querySelector("link[rel~='icon']");
    if (link) link.href = "/movie.svg";
  }, []);

  return <MovieList movies={movies} />;
}

export default Home;
