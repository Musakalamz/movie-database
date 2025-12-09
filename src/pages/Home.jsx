import ResultsGrid from "../components/ResultsGrid";

function Home() {
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-grey-800">
        Featured Picks
      </h2>
      <ResultsGrid />
    </div>
  );
}

export default Home;
