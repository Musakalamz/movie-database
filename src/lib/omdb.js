const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE = "https://www.omdbapi.com/";
const cache = new Map();

function buildUrl(params) {
  const usp = new URLSearchParams({ apikey: API_KEY, ...params });
  return `${BASE}?${usp.toString()}`;
}

async function request(url) {
  if (!API_KEY) throw new Error("OMDB API KEY not set");
  if (cache.has(url)) return cache.get(url);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `OMDB API request failed! ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  if (data.Response === "false") {
    throw new Error(data.Error || "OMDB API error");
  }
  cache.set(url, data);
  return data;
}

export async function searchMovies(query, page = 1, opts = {}) {
  if (!query) return { Search: [], totalResults: "0", Response: "True" };
  const { type, year } = opts;
  const params = { s: query, page };
  if (type && type !== "all") params.type = type;
  if (year) params.y = year;
  const url = buildUrl(params);
  return request(url);
}

export async function getMovie(imdbID) {
  const url = buildUrl({ i: imdbID, plot: "full" });
  return request(url);
}

export function clearCache() {
  cache.clear();
}
