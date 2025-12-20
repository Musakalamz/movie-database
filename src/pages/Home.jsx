import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Home | Movie DB";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] text-center space-y-16 animate-fade-in-up py-12">
      {/* Hero Section */}
      <section className="space-y-8 max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 pb-2 leading-tight">
          Cinema at Your Fingertips
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Dive into a universe of entertainment. Discover hidden gems, track
          your watchlist, and experience movies like never before.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link
            to="/movies"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-blue-500/20 active:scale-95"
          >
            Start Exploring
          </Link>
          <Link
            to="/about"
            className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-bold text-lg transition-all hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-95"
          >
            About Us
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full max-w-5xl px-4">
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-16 text-white shadow-2xl">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <div className="space-y-4 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold">
                Never Miss a Premiere
              </h2>
              <p className="text-blue-100 text-lg">
                Join our community of film enthusiasts. Get the latest movie
                news, exclusive curated lists, and personalized recommendations
                delivered straight to your inbox.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/newsletter"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg group"
              >
                Join Newsletter
                <svg
                  className="w-5 h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
