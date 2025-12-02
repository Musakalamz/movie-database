import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <span className="text-xl font-semibold ">Movie</span>
          <span className="text-gray-500">Movie Database</span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <SearchBar />
      </main>

      <footer className="container mx-auto px-4 py-8  text-sm text-gray-500">
        2025
      </footer>
    </div>
  );
}

export default App;
