import { useLoaderData, useSearchParams } from "react-router-dom";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import { useEffect } from "react";

function Home() {
  const { movies, totalResults, page } = useLoaderData();
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    document.title = "Movie DB";
    const link = document.querySelector("link[rel~='icon']");
    if (link) link.href = "/movie.svg";
  }, []);

  const totalPages = Math.ceil((Number(totalResults) || 0) / 10);

  function handlePageChange(newPage) {
    setSearchParams((prev) => {
      prev.set("page", newPage);
      return prev;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      <MovieList movies={movies} />
      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default Home;
