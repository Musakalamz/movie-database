import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-lg font-semibold">Movie DB</div>
          <p className="text-sm text-gray-600">
            Discover, explore, and save your favorite films.
          </p>
        </div>
        <div>
          <div className="mb-2 text-sm font-medium text-gray-800">Explore</div>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/favorites"
                className="text-gray-700 hover:text-blue-600"
              >
                Favorites
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-2 text-sm font-medium text-gray-800">
            Resources
          </div>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href="https://www.omdbapi.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                OMDb API
              </a>
            </li>
            <li>
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                React
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                Tailwind CSS
              </a>
            </li>
          </ul>
        </div>

        <div className="text-sm text-gray-600 md:text-right">
          <div>&copy; {new Date().getFullYear()} Movie DB</div>
          <div>Data by OMDb API</div>
          <label className="mt-2 inline-flex items-center gap-2">
            <input type="checkbox" />
            <span>Analytics opt-in</span>
          </label>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
