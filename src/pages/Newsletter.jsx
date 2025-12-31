import {Link} from "react-router-dom";
import {useEffect} from "react";

function Newsletter() {
  useEffect(() => {
    document.title = "Newsletter | Movie DB";
    const link = document.querySelector("link[rel~='icon']");
    if (link) Link.href = "/favorite.svg";
  }, [])

  return (
    <section className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Stay in the Movie Loop
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">
          Get weekly hand-picked movie recommendations, release alerts, and
          hidden gems from the Movie Database straight to your inbox.
        </p>
      </div>

      <form
        className="space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          const form = event.currentTarget;
          const formData = new FormData(form);
          const email = formData.get("email");
          const topics = formData.getAll("topics");
          console.log("Newsletter signup", { email, topics });
          form.reset();
        }}
      >
        <div className="space-y-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            We only send 1–2 emails per week. No spam, unsubscribe anytime.
          </p>
        </div>

        <fieldset className="space-y-2">
          <legend className="text-sm font-medium text-gray-700 dark:text-gray-200">
            What do you want in your inbox?
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                name="topics"
                value="trending"
                defaultChecked
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Trending movies</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                name="topics"
                value="watchlist"
                defaultChecked
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Watchlist picks</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                name="topics"
                value="releases"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>New releases</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                name="topics"
                value="behind-the-scenes"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Behind-the-scenes stories</span>
            </label>
          </div>
        </fieldset>

        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Join the newsletter
        </button>

        <p className="text-[11px] text-gray-500 mt-2 text-center">
          By subscribing you agree to receive movie recommendations from this
          app. Your email is never shared with third parties.
        </p>
      </form>
    </section>
  );
}

export default Newsletter;
