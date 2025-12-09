import { Link, NavLink } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-grey-100 ">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus-z-50 bg-blue-600 text-white py=2 px-3 rounded"
      >
        Skip to content
      </a>

      <header className="sticky top-0  z-30 bg-white dark:bg-gray-900 border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold"> Movie DB</span>
            <span className="hidden sm:inline text-gray-500">
              Search & Details
            </span>
          </Link>

          <nav className="ml-auto flex items-center gap-8">
            <NavLink to="/">Home</NavLink>

            <NavLink to="/">Favorites</NavLink>

            <NavLink to="/">About</NavLink>
          </nav>
        </div>
      </header>

      <main id="content" className="container mx-auto px-4 py-6"></main>

      <Footer />
    </div>
  );
}

export default App;
