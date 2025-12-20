import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Home | Movie DB";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8 animate-fade-in-up">
      <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 pb-2">
        Discover Your Next Favorite Movie
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl">
        Explore a vast database of movies, series, and episodes. Track your favorites and stay updated with the latest releases.
      </p>
      <div className="flex gap-4">
        <Link
          to="/movies"
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-blue-500/30"
        >
          Browse Movies
        </Link>
        <Link
          to="/about"
          className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-bold text-lg transition-transform hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          Learn More
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-5xl px-4">
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-bold mb-2">Smart Search</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Instantly find any movie with our powerful, debounced search engine.
          </p>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <div className="text-4xl mb-4">❤️</div>
          <h3 className="text-xl font-bold mb-2">Favorites</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Save movies to your personal watchlist to keep track of what to watch next.
          </p>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-xl font-bold mb-2">Responsive</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Enjoy a seamless experience across mobile, tablet, and desktop devices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
