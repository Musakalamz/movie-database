import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About | Movie DB";
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-16 animate-fade-in-up">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          About{" "}
          <span className="text-blue-600 dark:text-blue-400">Movie DB</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Your ultimate destination for discovering films, exploring rich
          details, and curating your personal watchlist. Built for speed,
          designed for you.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/movies"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            Start Browsing
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-transform hover:scale-105"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon="🔍"
            title="Smart Search"
            description="Instantly find movies with our debounced, type-ahead search engine powered by OMDb API."
          />
          <FeatureCard
            icon="⚡"
            title="Lightning Fast"
            description="Optimized performance with React Router loaders and efficient data caching."
          />
          <FeatureCard
            icon="📱"
            title="Fully Responsive"
            description="A seamless experience across all devices, from large desktops to mobile phones."
          />
          <FeatureCard
            icon="❤️"
            title="Favorites"
            description="Save your top picks locally. Your collection stays with you, even offline."
          />
          <FeatureCard
            icon="🌙"
            title="Dark Mode"
            description="Easy on the eyes. Toggle between light and dark themes to suit your viewing environment."
          />
          <FeatureCard
            icon="🛡️"
            title="Privacy First"
            description="No tracking, no ads. Your data stays in your browser's local storage."
          />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Built With Modern Tech
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <TechBadge name="React 18" />
          <TechBadge name="React Router v6+" />
          <TechBadge name="Tailwind CSS" />
          <TechBadge name="Vite" />
          <TechBadge name="OMDb API" />
          <TechBadge name="Context API" />
        </div>
      </section>

      {/* Footer / Credits */}
      <section className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Movie DB. Data provided by OMDb API.
        </p>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

function TechBadge({ name }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
      {name}
    </span>
  );
}
