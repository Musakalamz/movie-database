import axios from "axios";

const BASE = "https://www.omdbapi.com/";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export async function SingleMovieLoader({ params }) {
  const imdbID = params?.imdbID;
  if (!imdbID) {
    throw new Response("Missing movie id", { status: 400 });
  }
  if (!API_KEY) {
    throw new Response("OMDb API key not configured", { status: 500 });
  }

  const url = `${BASE}?apikey=${API_KEY}&i=${encodeURIComponent(
    imdbID
  )}&plot=full`;
  const { data } = await axios.get(url);

  if (data?.Response === "False") {
    throw new Response(data?.Error || "Movie not found", { status: 404 });
  }

  return { movie: data };
}
