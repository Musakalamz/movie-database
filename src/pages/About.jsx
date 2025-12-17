export default function About() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">About Movie DB</h1>
        <p className="text-gray-700 dark:text-gray-300">
          Movie DB is a professional, user-friendly movie explorer that helps
          you discover films, dive into rich details, organize personal
          collections, and track what you love—all in a fast, responsive
          interface.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-lg border p-5 bg-white dark:bg-gray-800">
          <h2 className="text-lg font-medium mb-2">Discover</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Search by title and filter by type or year. Smart suggestions appear
            as you type.
          </p>
        </div>
        <div className="rounded-lg border p-5 bg-white dark:bg-gray-800">
          <h2 className="text-lg font-medium mb-2">Details</h2>
          <p className="text-gray-700 dark:text-gray-300">
            View plot, cast, crew, runtime, genres, and ratings. Preloading
            accelerates navigation.
          </p>
        </div>
        <div className="rounded-lg border p-5 bg-white dark:bg-gray-800">
          <h2 className="text-lg font-medium mb-2">Organize</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Save favorites, create named collections (e.g., “Watch Later”), and
            rate titles 1–5 stars.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">How It Works</h2>
        <ul className="list-disc pl-5 text-gray-800 dark:text-gray-200">
          <li>
            Single Page Application built with React, Vite, and Tailwind CSS
          </li>
          <li>Fast search via OMDb API with caching and debounced input</li>
          <li>Accessible UI with keyboard shortcuts and dark mode support</li>
          <li>LocalStorage for favorites, ratings, and collections</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Privacy</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Analytics are opt‑in. When enabled, we track search popularity and
          favorites total locally. No personal data is sent to external
          services.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Data & Attribution</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Data is provided by the OMDb API. Set <code>VITE_OMDB_API_KEY</code>{" "}
          in your <code>.env</code>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium">Get In Touch</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Have feedback or a feature idea? Reach out and help us make Movie DB
          even better.
        </p>
      </section>
    </div>
  );
}
