import {
  useLoaderData,
  useSearchParams,
  useNavigation,
} from "react-router-dom";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import SkeletonGrid from "../components/SkeletonGrid";
import SkeletonDetails from "../components/SkeletonDetails";
import SearchBar from "../components/SearchBar";
import { useEffect } from "react";

function Movies() {
  const { movies, totalResults, page } = useLoaderData();
  const [_, setSearchParams] = useSearchParams();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  useEffect(() => {
    document.title = "Browse Movies | Movie DB";
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

  if (isLoading) {
    if (navigation.location.pathname.startsWith("/movie/")) {
      return <SkeletonDetails />;
    }
    return <SkeletonGrid />;
  }

  return (
    <div>
      <SearchBar />
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

export default Movies;
