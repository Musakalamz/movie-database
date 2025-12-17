import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../lib/omdb";
import ResultsGrid from "../components/ResultsGrid";
import Pagination from "../components/Pagination";
import SkeletonCard from "../components/SkeletonCard";
import ErrorNotice from "../components/ErrorNotice";

export default function Hom() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const page = parseInt(searchParams.get("page") ?? "1", 10);
  const [state, setState] = useState({
    status: "idle",
    data: null,
    error: null,
  });

  useEffect(() => {
    let active = true;
    async function run() {
      setState({ status: "loading", data: null, error: null });
      try {
        const data = await searchMovies(q || "batman", q ? page : 1);
        if (!active) return;
        setState({ status: "success", data, error: null });
      } catch (err) {
        if (!active) return;
        setState({
          status: "error",
          data: null,
          error: err.message || String(err),
        });
      }
    }
    run();
    return () => {
      active = false;
    };
  }, [q, page]);

  const totalResults = state.data?.totalResults
    ? Number(state.data.totalResults)
    : 0;
  const totalPages = totalResults ? Math.ceil(totalResults / 10) : 0;

  function goToPage(next) {
    setSearchParams({ q, page: String(next) });
  }

  const isFeatured = !q;
  if (state.status === "loading") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }
  if (state.status === "error") {
    return <ErrorNotice message={state.error} onRetry={() => goToPage(page)} />;
  }

  const items = state.data?.Search ?? [];
  if (items.length === 0)
    return <div className="text-gray-600">No results found.</div>;

  return (
    <div>
      {isFeatured && (
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          Featured Picks
        </h2>
      )}
      <ResultsGrid items={items} />
      {!isFeatured && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPrev={() => goToPage(Math.max(1, page - 1))}
          onNext={() => goToPage(Math.min(totalPages || page + 1, page + 1))}
        />
      )}
    </div>
  );
}
