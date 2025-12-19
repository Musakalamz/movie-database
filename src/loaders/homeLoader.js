import axios from "axios";

const BASE = "https://www.omdbapi.com/";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const HomeLoader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("s") || "bridge";
  const page = url.searchParams.get("page") || 1;
  const type = url.searchParams.get("type") || "";
  const year = url.searchParams.get("y") || "";

  let apiUrl = `${BASE}?apikey=${API_KEY}&s=${searchTerm}&page=${page}`;
  if (type) apiUrl += `&type=${type}`;
  if (year) apiUrl += `&y=${year}`;

  const response = await axios.get(apiUrl);

  const movies = response.data?.Search ?? [];
  const totalResults = response.data?.totalResults || "0";

  return { movies, searchTerm, totalResults, page: Number(page) };
};
